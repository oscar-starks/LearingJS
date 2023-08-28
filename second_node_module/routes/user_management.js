const express = require('express');
const router = express.Router();
const registerController = require('../controllers/create_user.js');
const loginController = require('../controllers/authController.js');


router.post('/', registerController.handleNewUser);
router.post('/login', loginController.handleLogin);


module.exports = router;