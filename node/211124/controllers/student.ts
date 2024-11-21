import { Request, Response } from "express";
import Joi from "joi";

type Student = {
  name: string;
  age: number;
  id: string;
};

const studentSchema = Joi.object({
  name: Joi.string().required().min(3).max(30),
  age: Joi.number().integer().required().min(1).max(99),
  id: Joi.string().required().min(5).max(30),
});

let students: Student[] = [];

const getStudentList = (request: Request, response: Response) => {
  response.json(students);
};

const getStudentDetails = (request: Request, response: Response) => {
  const { params } = request;
  if (Joi.string().required().min(5).max(30).validate(params.studentId).error) {
    response.status(400).send("Lo student id non è corretto");
  } else {
    const student = students.find((student) => student.id === params.studentId);
    if (student) {
      response.json(student);
    } else {
      response
        .status(400)
        .send(`Non è presente nessuno studente con id: ${params.studentId}`);
    }
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
