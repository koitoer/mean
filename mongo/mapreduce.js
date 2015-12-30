use testdb2

var students = [
{name : "Dale Cooper", class: "Calculus", tests: [30, 28, 45]},
{name : "Harry Truman", class: "Geometry", tests: [28, 26, 44]},
{name : "Shelly Johnson", class: "Calculus", tests: [27, 26, 43]},
{name : "Bobby Briggs", class: "College Algebra, tests: [20, 18, 35]"},
{name : "Donna Heyward", class: "Geometry", tests: [28, 28, 44]},
{name : "Audrey Horne", class: "College Algebra", tests: [22, 26, 44]},
{name : "James Hurley", class: "Calculus", tests: [20, 20, 38]},
{name : "Lucy Moran", class: "College Algebra", tests: [26, 24, 40]},
{name : "Tommy Hill", class: "College Algebra", tests: [30, 29, 46]},
{name : "Andy Brennan", class: "Geometry", tests: [20, 21, 38]}
];

var studNames = [];

for(i = 0; i < students.length ;  i++){
	studNames.push(students[i].name);
}

var studentInfo = students.map(function(x){ return x.name + " is in " + x.class});

var tests = [ {score : 30 }, {score : 28 }, {score : 45 }];
var testSum = tests.reduce(function(output, input){ return output + input.score;}, 0);

db.dropDatabase();


db.classes.insert({ class : "Philosophy 101",
	startDate : new Date(2016, 1, 10),
	students : [
			{fName : "Dale", lName : "Cooper", age : 42},
			{fName : "Lucy", lName : "Moran", age : 35},
			{fName : "Tommy", lName : "Hill", age : 44}
		],
	cost : 1600,
	professor : "Paul Slugman",
	topics : "Socrates,Plato,Aristotle,Francis Bacon",
	book: {
		isbn: "1133612105",
		title: "Philosophy : A Text With Readings",
		price: 165.42
		}
	})
 
db.classes.insert({class : "College Algebra",
	startDate : new Date(2016, 1, 11),
	students : [
		{fName : "Dale", lName : "Cooper", age : 42},
		{fName : "Laura", lName : "Palmer", age : 22},
		{fName : "Donna", lName : "Hayward", age : 21},
		{fName : "Shelly", lName : "Johnson", age : 24}
		],
	cost : 1500,
	professor : "Rhonda Smith",
	topics : "Rational Expressions,Linear Equations,Quadratic Equations",
	book:{
		isbn: "0321671791",
		title: "College Algebra",
		price: 179.40
		}
	})
 

db.classes.insert({class : "Astronomy 101",
	startDate : new Date(2016, 1, 11),
	students : [
		{fName : "Bobby", lName : "Briggs", age : 21},
		{fName : "Laura", lName : "Palmer", age : 22},
		{fName : "Audrey", lName : "Horne", age : 20}
		],
	cost : 1650,
	professor : "Paul Slugman",
	topics : "Sun,Mercury,Venus,Earth,Moon,Mars",
	book:{
		isbn: "0321815351",
		title: "Astronomy: Beginning Guide to Univ",
		price: 129.45
		}
	})
 
db.classes.insert({class : "Geology 101",
	startDate : new Date(2016, 1, 12),
	students : [
		{fName : "Andy", lName : "Brennan", age : 36},
		{fName : "Laura", lName : "Palmer", age : 22},
		{fName : "Audrey", lName : "Horne", age : 20}
		],
	cost : 1450,
	professor : "Alice Jones",
	topics : "Earth,Moon,Elements,Minerals",
	book:{
		isbn: "0321814061",
		title: "Earth : An Introduction to Physical Geology",
		price: 130.65
		}
	})
 
db.classes.insert({class : "Biology 101",
	startDate : new Date(2016, 1, 11),
	students : [
		{fName : "Andy", lName : "Brennan", age : 36},
		{fName : "James", lName : "Hurley", age : 25},
		{fName : "Harry", lName : "Truman", age : 41}
		],
	cost : 1550,
	professor : "Alice Jones",
	topics : "Earth,Cell,Energy,Genetics,DNA",
	book:{
		isbn: "0547219474",
		title: "Holt McDougal Biology",
		price: 104.30
		}
	})
 
db.classes.insert({class : "Chemistry 101",
	startDate : new Date(2016, 1, 13),
	students : [
		{fName : "Bobby", lName : "Briggs", age : 21},
		{fName : "Donna", lName : "Hayward", age : 21},
		{fName : "Audrey", lName : "Horne", age : 20},
		{fName : "James", lName : "Hurley", age : 25}
		],
	cost : 1600,
	professor : "Alice Jones",
	topics : "Matter,Energy,Atom,Periodic Table",
	book:{
		isbn: "0547219474",
		title: "Chemistry : Matter and Change",
		price: 104.30
		}
	})


var mapFunc = function(){ 	
	for(i=0; i<this.students.length ; i++){
		var student =  this.students[i];
		emit(student.fName + " " + student.lName, 1);
	}
}

var redFunc = function(student, values){
	count = 0;
	for(i = 0 ; i<values.length ; i++){
		count += values[i];	
	}
	return count;
}

db.classes.mapReduce(mapFunc, redFunc, {out : "map_ex"});
db.map_ex.find()

//How many classes the professor show.

var mapFunc2 = function(){ 	
	emit(this.professor, 1);
}

var reduceFunc2 = function(professor, count){
	return Array.sum(count);
}	

db.classes.mapReduce(mapFunc2, reduceFunc2 ,{ query:{professor: "Alice Jones"},out: "map_ex_2"});
db.map_ex2.find()

//Number of times a topic is covered in classes
var mapFunc3 = function(){
	var topics = this.topics.split(',');
	for(i in topics){
		emit(topics[i], 1);
	}
}

var redFunc3 = function(key, values){
	var count = 0;
	for(i in values){
		count += values[i];	
	}
	return count;
}

db.classes.mapReduce(mapFunc3, redFunc3, {out : "map_ex"});

//Cost for each individual professor classes.
var mapFunc4 = function(){
	emit(this.professor, {count : 1, cost: this.cost});
}

var redFunc4 = function(professor, values){
	var value = {count : 0 , cost: 0};
	for(i=0; i<values.length; i++){
		value.count += values[i].count;
		value.cost += values[i].cost;
	}
	return value;
}

var finalize4 = function(professor, value){
	value.average = (value.cost/value.count);
	return value;
}

db.classes.mapReduce(mapFunc4, redFunc4, {out : "map_ex4", finalize: finalize4});
db.map_ex4.find().pretty();

db.runCommand({"distinct": "classes", "key": "professor"});

//all our book information, and do some stuff for each book
db.runCommand({ group : { 
			ns : 'classes' , 
			key : {'book.price' : 1, 'book.title' : 1 }, 
			cond: { 'book.price' : {$gt : 110} },
			$reduce : function(curr, value){},
			initial : {}
			}
		});

//total cost for books per class
db.runCommand({ group : { 
			ns : 'classes' , 
			key : {'book.price' : 1, 'book.title' : 1 }, 
			cond: {},
			$reduce : function(curr, result){
				result.total += (curr.book.price * curr.students.length);
			},
			initial : { total : 0}
			}
		});

