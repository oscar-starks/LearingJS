const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"});

    // const body = fs.readFileSync("./html_test.html", "utf-8");
    // res.end(body);
    

    fs.createReadStream("./html_test.html").pipe(res);

});

server.listen(7000, (err, res) => {
    console.log("the server is listening");
});