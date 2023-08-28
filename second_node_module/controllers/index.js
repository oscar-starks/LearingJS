const path = require('path');
const express = require('express');
const server = express();
const cors = require('cors');
const PORT = process.env.PORT || 8000;
const corsOptions = require('../requirements/cors.js');
var bodyParser = require('body-parser');


// this is a middleware for json parsing
server.use(express.json());
server.use(cors(corsOptions));
// this is used to handle url encoded data
server.use(express.urlencoded({ extended:true}));

// THIS IS for serving static files
server.use('/',express.static(path.join(__dirname,'static/')));

// server.use((req, res, next) => {
//     console.log(req.body);
//     // console.log("I think this can act as a custom middleware")
//     next();
// });



server.use('/auth', require('../routes/user_management.js'));

server.use('/subdir', require('../routes/subdir.js'));

server.set('views',path.join(__dirname,'..', 'src'))

server.get('/about/', (req, res) => {
    res.sendFile(path.join(__dirname, '..','src', 'about.html'));
});

server.post('/chicken/', (req, res) => {
    console.log(req.body)
    res.sendFile(path.join(__dirname, '..','src', 'about.html'));
});

server.get('/redirect/', (req, res) => {
    res.redirect(301,"/");
});

server.get('/chaining/', (req, res, next) => {
    // console.log("chaining attempted");
    next();
}, (err, res) => {
    res.send("the chaining succeeded");
});

// server.get('*/', (req, res) => {
server.all('*', (req, res) => {

    res.status(404).sendFile(path.join(__dirname,'..', 'src', '404.html'));
});

server.use(function(err, req, res, next) {
    console.error(err.stack);
    res.send(500).send(err.message);
})

server.listen(PORT,(err, server) => {
    console.log(`server listening on ${PORT}`);
});

