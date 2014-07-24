var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instanceObject = {};

  instanceObject.storage = {};
  instanceObject.stackSize = 0;

  instanceObject.push = stackMethods.push;
  instanceObject.pop = stackMethods.pop;
  instanceObject.size = stackMethods.size;

  return instanceObject;

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