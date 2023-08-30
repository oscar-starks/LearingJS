const express = require('express');
const router = express.Router();
const registerController = require('../controllers/create_user.js');
const loginController = require('../controllers/authController.js');
const getUserController = require('../controllers/getUser.js');
const verifyJWT = require('../middlewares/jwtAuth.js');


router.post('/', registerController.handleNewUser);
router.post('/login', loginController.handleLogin);
router.get('/get-user', verifyJWT, getUserController.getUserProfile);


module.exports = router;