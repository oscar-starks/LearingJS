const path = require('path');
const express = require('express');
const bcrypt = require('bcrypt');
const fsPromises = require('fs').promises;

const server = express();
server.use(express.json()); // Add this line to parse request bodies as JSON
const PORT = process.env.PORT || 8000;

const UserDB = {
    users: require('../models/users.json'),
    setUsers: function(data) {
        this.users = data;
    }
};

const handleNewUser = async (req, res) => {
    try {
        console.log(req.body);
        const { user, password } = req.body;

        if (!user || !password) {
            return res.status(400).json({ "message": "Data must contain username and password" });
        }

        const duplicate = UserDB.users.find(person => person.username === user);
        if (duplicate) {
            return res.status(409).json({ "message": "Username already exists" });
        }

        const hashed_password = await bcrypt.hash(password, 10);

        const newUser = { "username": user, "password": hashed_password };
        UserDB.setUsers([...UserDB.users, newUser]);

        await fsPromises.writeFile(
            path.join(__dirname, "models", "users.json"),
            JSON.stringify(UserDB.users, null, 2) // Add formatting for readability
        );

        console.log(UserDB.users);
        res.status(201).json({ "message": "Success, new user created" });
    } catch (e) {
        res.status(500).json({ "message": "Internal server error" , "error": e });
    }
};


module.exports = {handleNewUser};
