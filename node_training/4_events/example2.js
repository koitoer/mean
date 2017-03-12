//Node Event Emitter
function Emitter(){
	this.events = {};
}

//Add listener ON
Emitter.prototype.on = function(type, listener){
	this.events[type] = this.events[type] || [] ;
	this.events[type].push(listener);
};

Emitter.prototype.emit = function(type){
	if(this.events[type]){
		this.events[type].forEach(function(listener){
			listener();
		});
	}
}

module.exports = Emitter;

