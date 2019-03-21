const express = require('express');

const router = express.Router(); // router is used just like app but it is smaller

const authControler = require('../controlers/auth')

// auth/login
router.get('/login',authControler.getLogin )
router.get('/signUp',authControler.getSignUp )


module.exports = router;