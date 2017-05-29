var person = {
	firstname: '',
	lastname: '',
	greet : function(){
		return this.firstname + ' ' + this.lastname;
	}
}

var john = Object.create(person);
john.firstname = "K";
john.lastname = "LN";

var jane = Object.create(person);
jane.firstname = "J";
jane.lastname = "H";

console.log(john.greet());
console.log(jane.greet());

