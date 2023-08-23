const path = require('path');
const express = require('express');
const server = express();
const cors = require('cors');
const PORT = process.env.PORT || 8000;

const whitelist = ['http://localhost:8000', 'https://www.google.com']


const corsOptions = {
    origin:(web_origin, callback) =>{
        console.log(web_origin)
        if(whitelist.indexOf(web_origin) !== -1 || !web_origin){
            // first argument indicates whether there is an error or not, usually it's the error object
            // second argument for the callback indicates that everything went well
            callback(null, true);
        }else {
            // res.send("origin not allowed!");
            // callback(null, true);
            callback(new Error('Origin not allowed!'));
        }
    },
    optionsSuccessStatus: 200,
    
}

server.use(cors(corsOptions));

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
server.use('/',express.static(path.join(__dirname,'static/')));

server.use('/subdir', require('./routes/subdir.js'));

server.set('views',path.join(__dirname, 'src'))

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

// server.get('*/', (req, res) => {
server.all('*', (req, res) => {

    res.status(404).sendFile(path.join(__dirname, 'src', '404.html'));
});

server.use(function(err, req, res, next) {
    console.error(err.stack);
    res.send(500).send(err.message);
})

server.listen(PORT,(err, server) => {
    console.log(`server listening on ${PORT}`);
});