var express = require('express');
var router = express.Router();
// var csrf = require('csurf');// bảo mật các form không cho các form web khác can thiệp vào hoạt động form này

// var csrfProtected = csrf();
// router.use(csrfProtected);

//Require Controller Module
var member_controller = require('../controllers/memberController.js');
var home_controller = require('../controllers/homeController.js');

/* GET Thành viên đăng ký. */
router.get('/dang-ky', home_controller.notLoggedIn, member_controller.get_register);

/* POST Thành viên đăng ký. */
router.post('/dang-ky', member_controller.post_register);

/* GET info thành viên đăng ký. */
router.get('/tai-khoan', member_controller.get_profile);

// GET login
// router.get('/dang-nhap', member_controller.get_login);

// POST login
// router.post('/dang-nhap', member_controller.post_login);

module.exports = router;
