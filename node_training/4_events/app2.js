var Emitter = require("./example2");

var emtr =  new Emitter();
emtr.on('greet', function(){
	console.log("Somewhere, someone said hello");
});

emtr.on('greet', function(){
	console.log("Greeting occurs");
});

console.log("Hello");
emtr.emit('greet');

