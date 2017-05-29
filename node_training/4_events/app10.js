'use strict';

class Person{
	constructor(firstname, lastname){
		this.firstname = firstname;
		this.lastname = lastname;
	}

	greet(){
		console.log(`Hello ${this.firstname}, ${this.lastname} `);
	}
}

var john = new Person("k","l");
john.greet();

var jane = new Person("iak","al");
jane.greet();

