const express = require('express');
const router = express.Router();
const registerController = require('../second_server.js');

router.post('/', registerController.handleNewUser);

module.exports = router;