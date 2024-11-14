import { createServer } from "node:http";
import { readFile } from "node:fs/promises";

async function getFileData(response) {
  try {
    const data = await readFile("./response.json", { encoding: "utf-8" });
    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json");
    response.end(data);
  } catch (error) {
    console.error(error);
    response.statusCode = 500;
    response.end();
  }
}

const server = createServer((request, response) => {
  if (request) {
    console.log("Request received");

    getFileData(response);
  }
});

server.listen(3000, () => {
  console.log("Local server is running");
});
