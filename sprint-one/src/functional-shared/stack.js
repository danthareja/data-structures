var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  someInstance.storage = {};
  someInstance.stackSize = 0;

  var extend = function(obj) {
    for (var key in arguments){
      var temp = arguments[key];
      for (var key in temp){
        obj[key] = temp[key];
      }
    }
    return obj;
  };

	extend(someInstance, stackMethods);  

  return someInstance;

};

var stackMethods = {
	push: function(item){
		this.storage[this.stackSize] = item;
		this.stackSize++;
	},
	pop: function(){
		this.stackSize && this.stackSize--;
		var result = this.storage[this.stackSize];
		delete this.storage[this.stackSize];
		return result;
	},
	size: function(){
		return this.stackSize;
	}
};