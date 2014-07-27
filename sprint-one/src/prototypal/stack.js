var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.stackSize = 0;

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


