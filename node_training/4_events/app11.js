//Inheriting event emitter
'use strict';

var EventEmitter = require('events');
var util = require('util');

//module.exports = class { }  -- Used to export the entire class
class Greetr extends EventEmitter{
	constructor(){
		super();
		this.greeting = " Hello World ";
	}

	greet(data) {
		console.log(this.greeting + ' : ' + data);
		this.emit('greet', data);	
	}
}


var greeter1 = new Greetr();
greeter1.on('greet', function(data){
	console.log("someone greeted! " + data);
});

greeter1.greet("Koitoer");

