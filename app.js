var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expHbs = require('express-handlebars');
var mongoose = require('mongoose');
var session = require('express-session');
var passport = require('passport');
var flash = require('connect-flash');
var validator = require('express-validator');

var settings = require('./config/settings');
var database = require('./config/database');

//Quantri
var quantriRoutes = require('./routes/quantri.js');

//Nguoidung
var chitietRoutes = require('./routes/chitiet');
var memberRoutes = require('./routes/member.js');
var index = require('./routes/index');

var app = express();

mongoose.connect(database.dbStr);
mongoose.connection.on('error', function(err){
  console.log('Error connect to Database: ' + err);
});

require('./config/passport.js');

// view engine setup
var hbsConfig = expHbs.create({
	helpers: require('./helpers/handlebars.js').helpers,
	layoutsDir: path.join(__dirname, '/templates/' + settings.defaultTemplate + '/layouts'),
	defaultLayout: path.join(__dirname, '/templates/' + settings.defaultTemplate + '/layouts/layout'),
	partialsDir: path.join(__dirname, '/templates/' + settings.defaultTemplate + '/partials'),
  pagesDir: path.join(__dirname, '/templates/' + settings.defaultTemplate + '/pages'),
	extname: '.hbs'
});

app.engine('.hbs', hbsConfig.engine);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, '/templates/' + settings.defaultTemplate));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(validator());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(flash());

app.use(session({
  secret: settings.secured_key,
  resave: false,
  saveUninitialized: false
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next){
  res.locals.settings = settings;
  res.locals.logged = req.isAuthenticated();
  res.locals.member = req.user;
  next();
});

var csrf = require('csurf');

var csrfProtected = csrf();
app.use(csrfProtected);

app.use('/', index);
app.use('/chi-tiet', chitietRoutes);
app.use('/quan-tri', quantriRoutes);
app.use('/thanh-vien', memberRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
