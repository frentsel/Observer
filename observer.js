var Observer = function(){
	var listeners = {};
	this.subscribe = function(e, handler){
		if(!listeners[e]) listeners[e] = [];
		listeners[e].push(handler);
	};
	this.unsubscribe = function(e, instane){
		if(!listeners[e]) return false;
		if(!instane) return delete listeners[e];
		listeners[e].map(function (_handler, n) {
			if(instane === _handler) delete listeners[e][n];
		});
	};
	this.publish = function(e, args){
		if(!listeners[e]) return false;
		listeners[e].map(function (handler) {
			handler(args);
		});
	};
};