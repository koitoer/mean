//.call and .apply

var obj = {
	name : "koitoer",
	greet : function(param){
		console.log(`Hello ${this.name} `);
	}
}

obj.greet();
//Parameters as x1,x2,x3
//The object becomes this == keyword
obj.greet.call({name : "Mauricio"});
//Parameters as [x1,x2,x3]
obj.greet.apply({name : "Mauricio"});
