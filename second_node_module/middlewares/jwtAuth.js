const jwt = require('jsonwebtoken');
const path = require('path');
require('dotenv').config({path: path.join(__dirname, '..', '.env')});

const verifyJWTMiddleware = (req, res, next) =>{
    const authHeader = req.headers["authorization"]
    if (!authHeader) return res.status(401).json({"message": "authorization header not set"});

    const authToken = authHeader.split(' ')[1];
    jwt.verify(
        authToken,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) =>{
            if (err) return res.status(403).json({"message":"authorization failed"});
            else{
                req.user = decoded.username;
                console.log(req.user);
                next();
            }
          
        }
    )


}

module.exports = verifyJWTMiddleware