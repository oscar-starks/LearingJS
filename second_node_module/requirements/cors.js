const whitelist = ['http://localhost:8000', 'https://www.google.com']
const corsOptions = {
    origin:(web_origin, callback) =>{
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

module.exports = corsOptions;