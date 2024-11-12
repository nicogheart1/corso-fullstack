const http = require("node:http");

const server = http.createServer((request, response) => {
    if (request) {
        console.log("Request received");


        // TODO manage response

        response.statusCode = 200;
        response.setHeader("Content-Type", "text/html");

        response.end("<html><body>I'm coming from server</body></html>");
    }
});

server.listen(3000, () => {
    console.log("Local server is running");
})
