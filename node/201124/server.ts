import express from "express";

const app = express();
app.use(express.json());

type Student = {
  name: string;
  age: number;
  id: string;
};

let students: Student[] = [];

app.get("/students", (request, response) => {
  response.json(students);
});

app.get("/students/:studentId", (request, response) => {
  const { params } = request;
  const student = students.find((student) => student.id === params.studentId);
  if (student) {
    response.json(student);
  } else {
    response
      .status(400)
      .send(`Non è presente nessuno studente con id: ${params.studentId}`);
  }
});

app.post("/student", (request, response) => {
  const { body } = request;
  students.push(body);
  response.status(201).send(`Aggiunto studente con id: ${body.id}`);
});

app.put("/students/:studentId", (request, response) => {
  const { body, params } = request;
  students = students.map((student: Student) => {
    if (student.id === params.studentId) {
      return { ...student, ...body, id: student.id };
    } else {
      return student;
    }
  });
  response.json(students);
});

app.delete("/students/:studentId", (request, response) => {
  const { params } = request;
  students = students.filter((student) => student.id !== params.studentId);
  response.send(`The student deleted is: ${params.studentId}`);
});

app.listen(3000, () => {
  console.log("Server is listening");
});
