for (i=0 ; i< 500000; i++){
	db.testdb.insert(
		{"account" : "account" + i,
		 "age" : Math.floor(Math.random() * 90)});
}

db.testdb.find({"age" : 50}).explain("executionStats");
//totalDocsExamined
//executionStats --> COLLSPAN
//executionTimeMillisEstimate


db.testdb.ensureIndex({"age" : 1, "account" : 1});

//higher cardinality, the more valueble the index on that field would be

db.testdb.getIndexes()
db.testdb.dropIndex("age_1_account_1")
db.testdb.find({"account" : "account100"}).explain("executionStats"));
db.testdb.ensureIndex({"account" : 1} , {"unique" : true});
db.testdb.dropIndex("account_1")
db.testdb.ensureIndex({"account" : 1} , {"unique" : true, "dropdups": true});
db.testdb.ensureIndex({"account" : 1} , {"unique" : true, "spare": true});  //eliminate null values in account field

db.testdb.drop();

db.testdb.insert([{"recipe" : "Chipotle Sofrita", "author" : "Sally Smith", "likes" : 205, "dislikes" : 2, "type" : "latin", "datePosted" : new Date(2014, 12, 27)},
{"recipe" : "Black Beans", "author" : "Paul Smith", "likes" : 108, "dislikes" : 4, "type" : "latin", "datePosted" : new Date(2015, 1, 3)},
{"recipe" : "Cilantro Lime Rice", "author" : "Sally Smith", "likes" : 190, "dislikes" : 4, "type" : "latin", "datePosted" : new Date(2015, 1, 12)},
{"recipe" : "Tomato Salsa", "author" : "Tim Smith", "likes" : 105, "dislikes" : 5, "type" : "latin", "datePosted" : new Date(2015, 1, 24)},
{"recipe" : "Tortillas", "author" : "Sam Smith", "likes" : 208, "dislikes" : 2, "type" : "latin", "datePosted" : new Date(2015, 2, 10)},
{"recipe" : "Tomatillo Green Chili", "author" : "Mark Smith", "likes" : 118, "dislikes" : 8, "type" : "latin", "datePosted" : new Date(2015, 2, 12)},
{"recipe" : "Barbecue Seitan", "author" : "Paul Smith", "likes" : 178, "dislikes" : 1, "type" : "vegan", "datePosted" : new Date(2015, 2, 16)},
{"recipe" : "Vegan Sloppy Joes", "author" : "Sally Smith", "likes" : 123, "dislikes" : 7, "type" : "vegan", "datePosted" : new Date(2015, 2, 21)},
{"recipe" : "Sweet Potato Fries", "author" : "Paul Smith", "likes" : 176, "dislikes" : 5, "type" : "vegan", "datePosted" : new Date(2015, 3, 8)},
{"recipe" : "Pita Bread", "author" : "Tim Smith", "likes" : 116, "dislikes" : 1, "type" : "arabic", "datePosted" : new Date(2015, 3, 12) },
{"recipe" : "Sundried Tomato Hummus", "author" : "Tony Smith", "likes" : 119, "dislikes" : 5, "type" : "arabic", "datePosted" : new Date(2015, 3, 27)}])


db.testdb.aggregate([{$group : {_id : "$author", num_recipes : {$sum : 1}}}])
db.testdb.aggregate([{$group : {_id : "$author", num_recipes : {$sum : 1}}}, {$sort : {num_recipes : -1}}])
db.testdb.aggregate([{$group : {_id : "$author", num_recipes : {$sum : "$likes"}}}, {$sort : {num_likes : -1}}])
db.testdb.aggregate([{$group : {_id : "$author", num_recipes : {$avg : "$likes"}}}, {$sort : {num_likes : -1}}])

db.testdb.aggregate([{$group : {_id : "$author", num_likes : {$min : "$likes"}}}, {$sort : {num_likes : -1}}])
db.testdb.aggregate([{$group : {_id : "$author", num_likes : {$max : "$likes"}}}, {$sort : {num_likes : -1}}, {$limit : 3}])

db.testdb.aggregate([{$match : { "type" : "latin" }}, {$group : {_id : "$author", num_recipes : { $sum : 1 }}}])
db.testdb.aggregate([{$match : { "type" : "latin" }}, {$group : {_id : "$author", num_recipes : { $sum : 1 }}}])

db.testdb.aggregate({"$project" : {"Recipe" : "$recipe"}})
db.testdb.aggregate({"$project" : {"Recipe" : "$recipe", _id : 0 }})
db.testdb.aggregate({"$project" : {"Strong Impression" : { "$add" : ["$likes", "$dislikes"]}, _id : 0 }})
db.testdb.aggregate({"$project" : {"Strong Impression" : { "$subtract" : ["$likes", "$dislikes"]}, _id : 0 }})

db.testdb.aggregate({"$project" : {"Month posted" : {"$month" : "$datePosted"}, "recipe" : 1 , "_id" : 0 }})
db.testdb.aggregate({"$project" : {"Type" : {"$substr" : ["$type",0,3]}, "recipe" : 1 , "_id" : 0 }})
db.testdb.aggregate({"$project" : {"Title" : {"$concat" : [{ $toUpper : "$recipe"}, " by " , "$author"]}, "_id" : 0 }})

db.testdb.aggregate({"$project" : {"Score" : {"$cond" : { if : {$gte : ["$likes" , 200 ]}, then : "Great" , else : "Ok"}}, 
				   "recipe" : 1, 
                                   "_id" : 0   }})

db.testdb.aggregate({"$project" : {"Compare to 200" : {$cmp : ["$likes" , 200]}, 
				   "recipe" : 1, 
                                   "_id" : 0   }})


