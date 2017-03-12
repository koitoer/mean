//Immediately invoked function expression (IIFE)

var firstname = "John";

(function(lastname){
	console.log("Immediately invoked");
	// Not affecting anything outside of the scope of the function
	var firstname = "Koitoer";
	console.log(lastname);	
}("LastName Param"));

console.log(firstname);
