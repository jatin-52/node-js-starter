var express = require('express');
var router = express.Router(),
user = require('../controllers/user.controller');

router.post('/signUp', user.signUp);

router.post('/login', user.login);

router.post('/me', user.me);

module.exports = router;
