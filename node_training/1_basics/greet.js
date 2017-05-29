//Module._load
//var Module = new Module(...);
//module.exports = ...
//module.load()
//module._extensions()
//Module.wrap();
//(function (export, require, module, _filename, _dirname){

var greet = function(){
	console.log("Hello from greet module");
};

//Pass by reference the wrap function
module.exports = greet;

//});
