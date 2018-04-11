
var settings = require('../config/settings.js');

//get form login
exports.login_get = function(req, res, next){
	res.render('quantri/' + settings.adminLoginTemplate,{
		layout: false //khong cho su dug layout mặc định là layout trang người dùng
	});
};

// exports.isLoggedIn = function(req, res, next) {
//     if (req.user && req.user.roles === "ADMIN" && req.user.provider === "backend") {
//         return next();
//     } else {
//         return res.redirect('/backoffice/login');
//     }
// }

