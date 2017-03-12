var util = require('util');

function Person(){
	this.firstname = "Koitoer";
	this.lastname = "Koitoer";
}

Person.prototype.greet = function(){
	console.log(`Hello ${this.firstname}, ${this.lastname} `);
}

function Policeman(){
	//Running superconstructor to define variables
	Person.call(this);
	this.badgenumber = '1234';
}

util.inherits(Policeman, Person);

var officer = new Policeman();
officer.greet();
