var express = require('express');
var router = express.Router();

//Require Controller Module
var chitiet_controller = require('../controllers/chitietController.js');

/* GET users listing. */
router.get('/1', chitiet_controller.get_chitiet);

module.exports = router;
