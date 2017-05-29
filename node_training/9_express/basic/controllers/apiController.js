var bodyParser = require('body-parser')

//req.body for POST
var urlencodedParser = bodyParser.urlencoded({extended:false});

//application/json parser
var jsonParser = bodyParser.json();


module.exports = function(app){
		//http://localhost:30001/params/person/1?qstr=myParam
	app.get('/params/person/:id', function(req, res){
		res.render('person', {ID: req.params.id, Qstr: req.query.qstr});
	})

	//http://localhost:30001/render
	//urlencodedParser attach the req.body object
	app.post('/person', urlencodedParser, function(req, res){
		res.send('Thank you !!')
		console.log(req.body.firstname);
		console.log(req.body.lastname);
	})

	//http://localhost:30001/render
	//jsonparser parse the json to req.body
	app.post('/personjson', jsonParser, function(req,res){
		res.send('Thank you for your json');
		console.log(req.body.firstname);
		console.log(req.body.lastname);
	});

}