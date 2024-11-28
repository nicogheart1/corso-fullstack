import express from "express";
import {
  addNewStudent,
  deleteStudent,
  getStudentDetails,
  getStudentList,
  updateStudent,
  uploadImage,
} from "./controllers/student";
import { login, signup } from "./controllers/auth";
import multer from "multer";
import "./controllers/passport";

const storage = multer.diskStorage({
  destination: (res, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (res, file, cb) => {
    cb(null, file.originalname)
  }
});

const upload = multer({ storage });

const app = express();
app.use(express.json());

app.use('/uploads', express.static('uploads'));


app.post("/auth/login", login);
app.post("/auth/signup", signup);

app.get("/students", getStudentList);
app.get("/students/:studentId", getStudentDetails);
app.post("/student", addNewStudent);
app.put("/students/:studentId", updateStudent);
app.delete("/students/:studentId", deleteStudent);

app.post("/students/:studentId/image", upload.single("image"), uploadImage);

app.listen(3000, () => {
  console.log("Server is listening");
});
