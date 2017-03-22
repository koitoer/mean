var Todos = require('../models/todoModel');

module.exports = function(app){

	app.get('/api/setupTodos', function(req, res){

		var staterTodos = [
			{ username :'test', todo : 'Feed the pet', isDone : false, hasAttachment: false},
			{ username :'test2', todo : 'Feed the cat', isDone : true, hasAttachment: false},
			{ username :'test3', todo : 'Feed the horse', isDone : false, hasAttachment: false}
		];

		Todos.create(staterTodos, function(err, results){
			res.send(results);
		});
	});

}