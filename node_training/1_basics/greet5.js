//Revealing module pattern
var greeting = "Unnacessible from outside";

function greet(){
	console.log(greeting);
}

module.exports = {
	greet : greet
}
