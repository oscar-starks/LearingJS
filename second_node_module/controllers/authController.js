const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config({path: path.join(__dirname, '..', '.env')});
const fsPromises = require('fs').promises;

const UserDB = {
    users: require('../models/users.json'),
    setUsers: function(data) {
        this.users = data;
    }
};


const handleLogin = async function(req, res) {

    try {
        const { user, password } = req.body;

        if (!user || !password) {
            return res.status(400).json({ "message": "Data must contain username and password" });
        }

        const userExists = UserDB.users.find(person => person.username === user);

        if (!userExists) {
            return res.status(401).json({ "message": "Username does not exist" });
        }
        else{
            match = await bcrypt.compare(password, userExists.password);
            if (match) {
                access_secret_token = process.env.ACCESS_TOKEN_SECRET
                refresh_seret_token = process.env.REFRESH_TOKEN_SECRET

                const accessToken = jwt.sign(
                    { "username": user },
                    process.env.ACCESS_TOKEN_SECRET,
                    {expiresIn: '50s'}
                )

                const refreshToken = jwt.sign(
                    { "username": user },
                    process.env.REFRESH_TOKEN_SECRET,
                    {expiresIn: '200s'}
                )

                return res.json({ "message": "password matches", "data":{
                    "access_token": accessToken,
                    "refresh_token": refreshToken
                }
                });

            }
                else return res.status(400).json({ "message": "password mismatch" });

        }



    }catch(e) {
        res.status(500).json({ "message": "Internal server error" });

        }

};

module.exports = {handleLogin}