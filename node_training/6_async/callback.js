function greet(callback){
	console.log('Hello callback');
	var data = {
		firstname : 'Mauricio'
	}
	callback(data);
}

greet(function(data){
	console.log("Greet 1 " + data);
})


greet(function(data){
	console.log("Greet 2 different callback " + data.firstname);
})