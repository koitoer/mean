var fs = require('fs');

//Wait until the file is already reading
var greet =  fs.readFileSync(__dirname + '/text.txt' , 'utf8');

console.log(greet);

var greet2 = fs.readFile(__dirname + '/text.txt', 'utf8', onceRead);

//Error-first callback
function onceRead(err, data){
	console.log("This is a callback for read file " + data);
	console.log(err);
}

console.log('Done')