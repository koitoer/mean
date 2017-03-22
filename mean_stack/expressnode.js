var express = require('express');

var app = express();
var formidable = require('formidable');
var session = require('express-session');
var parseurl = require('parseurl');
var fs = require('fs');
var credentials = require('./credentials.js');

app.disable('x-powered-by');


var handlebars = require('express-handlebars').create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));
app.use(require('body-parser').urlencoded({extended:true}));
app.use(require('cookie-parser')(credentials.cookieSecret));

app.get('/', function(req, res){
	res.render('home');
});

app.use(function(req, res, next){
	console.log("Looking for " + req.url);
	next();
});


app.get('/contact', function(req, res){
	res.render('contact',{csrf: 'CSRF token here'});
});

app.get('/thankyou', function(req, res){
	res.render('thankyou');
});

app.post('/process',function(req, res){
	console.log('FORM : ' + req.query.form);
	console.log('CSRF form : ' + req.body._csrf);
	console.log('Email : ' + req.body.email);
	console.log('Questions : ' + req.body.ques);
	res.redirect(303,'/thankyou');
});

app.get('/about', function(req, res){
	res.render('about');
});

app.get("/junk", function(req, res){
	console.log("Try to reach junk");
	throw new Error("/junk does not exists");
});

app.get('/file-upload', function(req, res){
	var now = new Date();
	res.render('file-upload',{
		year : now.getFullYear(),
		month : now.getMonth()
	});
});


app.post('/file-upload/:year/:month', function(req, res){
	var form = new formidable.IncomingForm();
	form.parse(req, function(err, field, file){
		if(err)
			return res.redirect(303,'/error');
		console.log('Received file');
		console.log(file);
		res.redirect(303, '/thankyou');
	});
});

app.get('/cookie',function(req, res){
	res.cookie('username', 'Koitoer', {expire: new Date() + 9999}).send('username value koitoer');
});

app.get('/listcookies',function(req, res){
	console.log("Cookies : " , req.cookies);
	res.send("Look into the console");
});


app.get('/deletecookie',function(req, res){
	res.clearCookie("username");
	res.send("Cookie deleted");
});

app.use(session({
	resave: false,
	saveUninitialized: true,
	secret: credentials.cookieSecret
}));


app.use(function(req, res, next){
	var views =  req.session.views;
	if(!views){
		views = req.session.views = {};		
	}

	var pathname = parseurl(req).pathname;
	views[pathname] = (views[pathname] || 0 ) + 1;
	next();
});


app.get('/viewcount' ,function(req, res){
	res.send("You view this page " + req.session.views['/viewcount'] + ' times ');
});

app.get('/readfile',function(req, res, next){
	fs.readFile('./public/random_file.txt', function(err, data){
		if(err)
			return console.error(err);
		res.send("The file " + data.toString());
	});
});


app.get('/writeFile',function(req, res, next){
	fs.writeFile('./public/write_file.txt','More random file text', function(err){
		if(err)
			return console.error(err);
	});
	fs.readFile('./public/write_file.txt', function(err, data){
		if(err)
			return console.error(err);
		res.send("The file once " + data.toString());
	});
});

app.use(function(err, req, res, next){
	console.log("Error " + err.message);
	next();
});



app.use(function(req, res){
	res.type('text/html');
	res.status(404);
	res.render("404");
});

app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.render("500");
});



app.listen(app.get('port'), function(){
	console.log('Express has been started Crtl-C end');
});


