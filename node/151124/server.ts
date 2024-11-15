import express from "express";

const app = express();

app.get("/", (request, response) => {
  if (request) {
    console.log("Request received");
    response.send("Hello World!");
  }
});

app.get("/test", (request, response) => {
  if (request) {
    console.log("Request received");
    response.status(201).json({ name: "Mario" });
  }
});

app.listen(3000, () => {
  console.log("Server is listening");
});
