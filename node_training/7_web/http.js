var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){

	//res.writeHead(200, { 'Content-Type' : 'text/plain'});
	//res.end('Hello World');

	res.writeHead(200, { 'Content-Type' : 'text/html'});
	var html = fs.readFileSync(__dirname+'/index.html', 'utf8');
	var message = " Message content";
	html = html.replace('{Message}', message);
	res.end(html);

}).listen(6969, '127.0.0.1');


http.createServer(function(req, res){

	//res.writeHead(200, { 'Content-Type' : 'text/plain'});
	//res.end('Hello World');

	res.writeHead(200, { 'Content-Type' : 'text/html'});
	var html = fs.createReadStream(__dirname+'/index.html').pipe(res);


}).listen(6970, '127.0.0.1');