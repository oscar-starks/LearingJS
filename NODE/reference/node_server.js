const http = require("node:http");

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "application/json"});
    var response_data = {
        "name": "goat",
        "description": "four legs",
    }

    res.end(JSON.stringify(response_data));
    // console.log(req);
});

server.listen(7000, (err, res) => {
    console.log("the server is listening");
});