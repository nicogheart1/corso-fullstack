import { createServer } from "node:http";

const server = createServer((request, response) => {
    if (request) {
        console.log("Request received");


        // TODO manage response

        response.statusCode = 200;
        
        //response.setHeader("Content-Type", "text/html");
        response.setHeader("Content-Type", "application/json");

        response.end(JSON.stringify({ name: "Mario"}));
    }
});

server.listen(3000, () => {
    console.log("Local server is running");
})
