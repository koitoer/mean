//We are created a new object, reference to module.export is different
exports = function(){
	console.log('Hello')
}

console.log(exports);
console.log(module.exports);
