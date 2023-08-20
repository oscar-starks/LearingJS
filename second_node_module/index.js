const path = require('path');
const express = require('express');
const server = express();
const cors = require('cors');
const PORT = process.env.PORT || 8000;

server.use(cors());

server.use((req, res, next) => {
    console.log(req.method)
    console.log(req.headers.origin)
    console.log(req.path)
    console.log("I think this can act as a custom middleware")
    next();
});

// this is used to handle url encoded data
server.use(express.urlencoded({ extended:false}));
// this is a middleware for json parsing
server.use(express.json());
// THIS IS for serving static files
server.use(express.static(path.join(__dirname,'static/')));

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));

});

server.get('/about/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'about.html'));
});

server.get('/redirect/', (req, res) => {
    res.redirect(301,"/");
});

server.get('/chaining/', (req, res, next) => {
    console.log("chaining attempted");
    next();
}, (err, res) => {
    res.send("the chaining succeeded");
});

server.get('*/', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'src', '404.html'));
});


server.use(function(err, req, res, next) {
    console.log(err.stack);
    res.send(500).send(err.message);
})

server.listen(PORT,(err, server) => {
    console.log(`server listening on ${PORT}`);
});