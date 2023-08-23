const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'src', 'index.html'));

});

router.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'src', 'about.html'));

});


module.exports = router;