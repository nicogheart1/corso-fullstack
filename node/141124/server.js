import { createServer } from "node:http";
import { readFile } from "node:fs/promises";

const server = createServer((request, response) => {
  if (request) {
    console.log("Request received");

    // TODO manage response
    readFile("./response.json", { encoding: "utf-8" })
      .then((data) => {
        response.statusCode = 200;
        response.setHeader("Content-Type", "application/json");
        response.end(data);
      })
      .catch((error) => {
        console.error(error);
        response.statusCode = 500;
        response.end();
      });
  }
});

server.listen(3000, () => {
  console.log("Local server is running");
});

/*new Promise((resolve, reject) => {
  if (2 > 1) {
    resolve()
  } else {
    reject()
  }
}).then((success) => {
  console.log("promise succeded")
}).catch((error) => {
  console.error("promise failed")
})*/
