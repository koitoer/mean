//Inheriting event emitter

var EventEmitter = require('events');
var util = require('util');

function Greetr(){
	//Override the thigs, superconstructor call
	EventEmitter.call(this);
	this.greeting = 'Hello World';
}

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function(data){
	console.log(this.greeting + ' : ' + data);
	this.emit('greet', data);	
}

var greeter1 = new Greetr();
greeter1.on('greet', function(data){
	console.log("someone greeted! " + data);
});

greeter1.greet("Koitoer");

