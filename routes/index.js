var express = require('express');
var router = express.Router();

// var csrf = require('csurf');

// var csrfProtected = csrf();
// router.use(csrfProtected);

//Require Controllers Module
var home_controller = require('../controllers/homeController');

/* GET home page. */
router.get('/', home_controller.index);

router.get('/thanh-vien/dang-xuat', home_controller.get_logout);

// router.use('/', home_controller.get_use);

// POST login
router.post('/', home_controller.post_login);

module.exports = router;
