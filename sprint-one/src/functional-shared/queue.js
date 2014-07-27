var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {};

  someInstance.storage = {};
  someInstance.enqLoc = 0;
  someInstance.deqLoc = 0;

  var extend = function(obj) {
    for (var key in arguments){
      var temp = arguments[key];
      for (var key in temp){
        obj[key] = temp[key];
      }
    }
    return obj;
  };

	extend(someInstance, queueMethods);  

  return someInstance;

};

var queueMethods = {
	enqueue: function(item){
		this.storage[this.enqLoc] = item;
		this.enqLoc++;
	},
	dequeue: function(){
		if ( this.enqLoc - this.deqLoc ){
			var result = this.storage[this.deqLoc];
			delete this.storage[this.deqLoc];
			this.deqLoc++;
			return result;
		}
	},
	size: function(){
		return this.enqLoc - this.deqLoc;
	}
};