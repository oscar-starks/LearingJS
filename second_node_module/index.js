const path = require('path');
const express = require('express');
const server = express();
const PORT = process.env.PORT || 8000;


server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));

});

server.get('/about/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'about.html'));
});

server.get('/redirect/', (req, res) => {
    res.redirect(301,"/");
});

server.get('*/', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'src', '404.html'));
});


server.listen(PORT,(err, server) => {
    console.log(`server listening on ${PORT}`);
});