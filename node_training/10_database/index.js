var mongoose = require('mongoose');
//mongolab
mongoose.connect('mongodb://koito:koito1@ds137230.mlab.com:37230/testkoitoer');

var Schema = mongoose.Schema;

var personSchema = new Schema({
	firstname : String, 
	lastname : String
});

var Person = mongoose.model('Person', personSchema);

var koitoer = Person({firstname: 'Koitoer', lastname : 'Koitoes'});
koitoer.save(function(err){
	if(err) throw err;
	console.log('person saved!!');
});

var rox = Person({firstname: 'rox', lastname : 'rox'});
rox.save(function(err){
	if(err) throw err;
	console.log('person saved!!');
});

Person.find({}, function(err, users){
		if(err) throw err;
		console.log(users);
});

console.log('complete');