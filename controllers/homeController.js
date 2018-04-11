var Member = require('../models/member');
var passport = require('passport');
var settings = require('../config/settings.js');

exports.index = function(req, res, next) {
	var messages = req.flash('error');
	res.render('frontend/home/index', { 
		title: 'News_TTB Website',
		csrfToken: req.csrfToken(),
		messages: messages,
		hasErrors: messages.length > 0
	});
};

//POST Login
// exports.post_login = function(req, res, next){
// 	res.send('Đăng nhập thất bại');
// };
exports.post_login = passport.authenticate('local.login', {
	successRedirect: '/',
	failureRedirect: '/',
	failureFlash: true
});

// GET Logout
exports.get_logout = function(req, res, next) {
    req.logout();
    res.redirect('/');
};

// // GET Use
// exports.get_use = function(req, res, next) {
//     next();
// };

// Is Logged
exports.isLoggedIn = function(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
}

// Is not logged
exports.notLoggedIn = function(req, res, next) {
    if (!req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
}
