Array.prototype.select = function(closure){
	for(var n = 0; n < this.length; n++) {
		if(closure(this[n])){
			return this[n];
		}
	}

	return null;
};
