const express = require('express');

const router = express.Router(); // router is used just like app but it is smaller

const generalControler = require('../controlers/general')

router.get('/',generalControler.getHome )


module.exports = router;