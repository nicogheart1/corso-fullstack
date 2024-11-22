import express from "express";
import {
  addNewStudent,
  deleteStudent,
  getStudentDetails,
  getStudentList,
  updateStudent,
} from "./controllers/student";

const app = express();
app.use(express.json());

app.get("/students", getStudentList);
app.get("/students/:studentId", getStudentDetails);
app.post("/student", addNewStudent);
app.put("/students/:studentId", updateStudent);
app.delete("/students/:studentId", deleteStudent);

app.listen(3000, () => {
  console.log("Server is listening");
});
