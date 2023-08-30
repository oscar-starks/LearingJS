const UserDB = {
    users: require('../models/users.json'),
    setUsers: function(data) {
        this.users = data;
    }
};


const getUserProfile = async (req, res) => {
    loggedUser = req.user
   
    const user = UserDB.users.find(person => person.username === loggedUser);
    if (user) {
        return res.status(200).json({ "message": "User exists", "data":"this user is the bestest in the world", "username":user });
    }

    res.status(401).json({ "message": "User not found" });
    
};


module.exports = {getUserProfile};
