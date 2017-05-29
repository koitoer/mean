
app.use('/', function(req, res, next){

	var con = mysql.createConnection({
		host : 'localhost',
		user : 'test',
		password : 'test',
		database : 'adressbook'
	});

	con.query('SELECT * from person', function(err, rows){
		if(err) throw err;
		console.log(rows)
	});

	next();
});