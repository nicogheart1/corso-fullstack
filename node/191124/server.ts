import exp from "constants";
import express from "express";

const app = express();
app.use(express.json());

app.get("/", (request, response) => {
  const { query } = request;
  console.log(query);
  response.send(`The name is: ${query.name}`);
});

app.get("/list/:itemId", (request, response) => {
  const { params, query } = request;
  console.log(params, query);
  response.send(`The itemId is: ${params.itemId}`);
});

app.post("/", (request, response) => {
  const { body, query } = request;
  console.log(body, query);
  response.json({ name: body.name });
})

app.listen(3000, () => {
  console.log("Server is listening");
});
