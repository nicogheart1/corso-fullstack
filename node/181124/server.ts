import express from "express";
import { EventEmitter } from "node:events";
import { createReadStream } from "node:fs";

const app = express();

const eventEmitter = new EventEmitter();

app.use(function setCustomHeader(request, response, next){
  console.log("passa dal middleware");
  response.setHeader("Custom-Header", "mi ha settato il middleware");
  next();
});

app.use(function setResponseStatus(request, response, next){
  response.status(203);
  next();
});

app.get("/", (request, response) => {
  if (request) {
    console.log("Request received");

    eventEmitter.on("requestReceived", (data) => {
      console.log("Evento requestReceived:", data);
    })

    console.log("passo di qui", 1);
    eventEmitter.emit("requestReceived", "this is a test");

    response.send("Hello World!");
  }
});

app.get("/test", (request, response) => {
  if (request) {
    console.log("Request received");

    const readStream = createReadStream("./response.json", { encoding: "utf-8" });

    readStream.on("data", (partial) => {
      console.log("this is a chunk:", partial);
    });

    readStream.on("end", () => {
      console.log("read stream ended");

      response.json({ name: "Mario" });
    });

    readStream.on("error", (error) => {
      console.error(error);
    });
  }
});

app.listen(3000, () => {
  console.log("Server is listening");
});
