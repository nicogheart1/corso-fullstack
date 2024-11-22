import { Request, Response } from "express";
import Joi from "joi";
import pgPromise from "pg-promise";

const db = pgPromise()("postgres://postgres:postgres@localhost:5432/postgres");

const setupDB = async () => {
  /*await db.none(`
        DROP TABLE IF EXISTS students;

        CREATE TABLE students (
            id SERIAL NOT NULL PRIMARY KEY,
            name TEXT NOT NULL,
            age INTEGER NOT NULL
        );
    `);*/

  /*await db.none(`
        INSERT INTO students (name, age) VALUES ('Mario', 24);

        INSERT INTO students (name, age) VALUES ('Lucia', 31);
    `);*/

  const studentsDb = await db.many(`
    SELECT * FROM students;
  `);
  

  console.log("studentsDb", studentsDb);
};

setupDB();

type Student = {
  name: string;
  age: number;
  id: string;
};

const studentSchema = Joi.object({
  name: Joi.string().required().min(3).max(30),
  age: Joi.number().integer().required().min(1).max(99),
  id: Joi.number().integer().required().min(1).max(5),
});

let students: Student[] = [];

const getStudentList = async (request: Request, response: Response) => {
  try {
    const studentList = await db.many(`
      SELECT * FROM students;
    `);
    response.json(studentList);
  } catch (error) {
    console.error(error);
    response.status(500).send("Internal server error");
  }
};

const getStudentDetails = async (request: Request, response: Response) => {
  try {
    const { params } = request;
    if (
      Joi.number()
        .integer()
        .required()
        .min(1)
        .max(99999)
        .validate(params.studentId).error
    ) {
      response.status(400).send("Lo student id non è corretto");
    } else {
      const student = await db.oneOrNone(
        `SELECT * FROM students WHERE id=$1`,
        Number(params.studentId)
      );
      if (student) {
        response.json(student);
      } else {
        response
          .status(400)
          .send(`Non è presente nessuno studente con id: ${params.studentId}`);
      }
    }
  } catch (error) {
    console.error(error);
    response.status(500).send("Internal server error");
  }
};

const addNewStudent = (request: Request, response: Response) => {
  const { body } = request;

  const dataValidation = studentSchema.validate(body);
  if (dataValidation.error) {
    response.status(400).send(dataValidation.error);
  } else {
    students.push(body);
    response.status(201).send(`Aggiunto studente con id: ${body.id}`);
  }
};

const updateStudent = (request: Request, response: Response) => {
  const { body, params } = request;
  students = students.map((student: Student) => {
    if (student.id === params.studentId) {
      return { ...student, ...body, id: student.id };
    } else {
      return student;
    }
  });
  response.json(students);
};

const deleteStudent = (request: Request, response: Response) => {
  const { params } = request;
  students = students.filter((student) => student.id !== params.studentId);
  response.send(`The student deleted is: ${params.studentId}`);
};

export {
  getStudentList,
  getStudentDetails,
  addNewStudent,
  updateStudent,
  deleteStudent,
};
