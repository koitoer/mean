//Chunk : piece of data being sent through a stream
//Readable, Writable, Duplex, Transform, PassTrough
//util.inherits(Stream, EE); -- on, emit
//util.inherits(Readable, Stream); -- read
//util.inherits(CustomStream, Readable)


var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/lorem.txt')
var writable = fs.createWriteStream(__dirname + '/greetcopy.txt')


readable.on('data', function(chunk){
	console.log(chunk);
	writable.write(chunk);
});

var readable2 = fs.createReadStream(__dirname + '/lorem.txt', 
	{encoding : 'utf8'})

readable2.on('data', function(chunk){
	console.log(chunk);
});

var readable3 = fs.createReadStream(__dirname + '/lorem.txt', 
	{encoding : 'utf8', highWaterMark : 1024})

readable3.on('data', function(chunk){
	console.log(chunk.length);
});


