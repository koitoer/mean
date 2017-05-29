var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var apiController = require('./controllers/apiController')


//Environment variables
var port = process.env.PORT || 30001 ;

//req.body for POST
var urlencodedParser = bodyParser.urlencoded({extended:false});

//application/json parser
var jsonParser = bodyParser.json();

app.use('/assets', express.static(__dirname+'/public'));
app.set('view engine', 'ejs');

//Api Controller

app.use('/', function(req, res, next){
	console.log('Request Url ' + req.url);
	next();
});

app.get('/render', function(req, res){
	console.log('Request Url Render');
	res.render('index');
});

app.get('/renderperson/:id', function(req, res){
	res.render('person', { ID: req.params.id });
});

app.get('/', function(req, res){
	res.send('<html><head><link href=assets/style.css type=text/css rel="stylesheet" /></head><body><h1>World Hello!</h1></body></html>')
});

app.get('/person/:id', function(req, res){
	res.send('<html><head><link href=assets/style.css type=text/css rel="stylesheet" /></head><body>' +
		'<h1>Hello !!! ' + req.params.id +'</h1></body></html>')
});

app.get('/api', function(req, res){
	res.json({firstname:'Koitoer'});
});

app.get('/request', function(req, res){
	res.json(req.params);
});

apiController(app);
app.listen(port);
