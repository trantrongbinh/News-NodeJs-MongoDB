var express = require('express');
var router = express.Router();

//Require Controller Module
var quantri_controller = require('../controllers/quantriController.js');

router.get('/dang-nhap', quantri_controller.login_get);

module.exports = router;