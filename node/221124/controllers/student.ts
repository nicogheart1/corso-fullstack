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
            age INTEGER NOT NULL,
            image TEXT
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

const studentSchema = Joi.object({
  name: Joi.string().required().min(3).max(30),
  age: Joi.number().integer().required().min(1).max(99),
});

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

const addNewStudent = async (request: Request, response: Response) => {
  try {
    const { body } = request;

    const dataValidation = studentSchema.validate(body);
    if (dataValidation.error) {
      response.status(400).send(dataValidation.error);
    } else {
      await db.none(
        `
        INSERT INTO students (name, age) VALUES ($1, $2);
    `,
        [body.name, body.age]
      );
      response.status(201).send(`Aggiunto studente`);
    }
  } catch (error) {
    console.error(error);
    response.status(500).send("Internal server error");
  }
};

const updateStudent = async (request: Request, response: Response) => {
  try {
    const { body, params } = request;
    const dataValidation = studentSchema.validate(body);
    if (
      Joi.number()
        .integer()
        .required()
        .min(1)
        .max(99999)
        .validate(params.studentId).error ||
      dataValidation.error
    ) {
      response.status(400).send("La richiesta è in un formato non corretto");
    } else {
      await db.none(`UPDATE students SET name=$2, age=$3 WHERE id=$1`, [
        params.studentId,
        body.name,
        body.age,
      ]);

      response.send(`Aggiornato studente con id: ${params.studentId}`);
    }
  } catch (error) {
    console.error(error);
    response.status(500).send("Internal server error");
  }
};

const deleteStudent = async (request: Request, response: Response) => {
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
      await db.none(
        `DELETE FROM students WHERE id=$1`,
        Number(params.studentId)
      );
      response.send(`The student deleted is: ${params.studentId}`);
    }
  } catch (error) {
    console.error(error);
    response.status(500).send("Internal server error");
  }
};

const uploadImage = async (request: Request, response: Response) => {
  try {
    const { params } = request;
    const filename = request.file?.path;

    if (
      Joi.number()
        .integer()
        .required()
        .min(1)
        .max(99999)
        .validate(params.studentId).error || !filename
    ) {
      response.status(400).send("La richiesta è in un formato non corretto");
    } else {
      await db.none(`UPDATE students SET image=$2 WHERE id=$1`, [params.studentId, filename])
      response.send("Immagine caricata con successo");
    }
  } catch (error) {
    console.error(error);
    response.status(500).send("Internal server error");
  }
};

export {
  getStudentList,
  getStudentDetails,
  addNewStudent,
  updateStudent,
  deleteStudent,
  uploadImage,
};
