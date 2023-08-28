const UserDB = {
    users: require('../models/users.json'),
    setUsers: function(data) {
        this.users = data;
    }
};

const bcrypt = require('bcrypt');

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
            console.log(match);
            if (match) return res.json({ "message": "password matches" });
            else return res.status(400).json({ "message": "password mismatch" });

        }



    }catch(e) {
        res.status(500).json({ "message": "Internal server error" });

        }

};

module.exports = {handleLogin}