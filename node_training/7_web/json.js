var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){

	//res.writeHead(200, { 'Content-Type' : 'text/plain'});
	//res.end('Hello World');

	res.writeHead(200, { 'Content-Type' : 'application/json'});
	var obj = {
		firstname : 'Koitoer',
		lastname: 'Koitoer'
	};
	
	res.end(JSON.stringify(obj));

}).listen(6969, '127.0.0.1');