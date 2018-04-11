var passport = require('passport');

exports.get_register = function(req, res, next){
	var messages = req.flash('error');
	res.render('frontend/member/register',{
		pageTitle: '- Đăng ký thành viên.',
		csrfToken: req.csrfToken(),
		messages: messages,
		hasErrors: messages.length > 0
	});
};

//POST đăng ký
exports.post_register = passport.authenticate('local.register', {
	successRedirect: '/thanh-vien/tai-khoan',
	failureRedirect: '/thanh-vien/dang-ky',
	failureFlash: true
});

//GET Thông tin thành viên
exports.get_profile = function(req, res, next){
	res.render('frontend/member/profile',{
		pageTitle: '- Thông tin cá nhân.'
	});
};

//GET Login
// exports.get_login = function(req, res, next){
// 	res.senFile('/frontend/member/login',{
// 		csrfToken: req.csrfToken()
// 	});
// };

//POST Login
// exports.post_login = function(req, res, next){
// 	res.send('Đăng nhập thất bại');
// };