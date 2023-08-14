const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
    console.log(req.method)
    if (req.url === "/") {
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end("this is the home page");
    }else{
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end(`this is the ${req.url} page`);
    }


});

server.listen(7000, (err, res) => {
    console.log("the server is listening");
});