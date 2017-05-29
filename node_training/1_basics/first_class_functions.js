function greet(){
	console.log("Hi");
}
greet();

//First class function
function logGreetings(fn){
	fn();
}

logGreetings(greet);

//Function expression
var greetMe = function(){
	console.log("Hi koitoer");
}

greetMe();

logGreetings(greetMe);
