var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {};
  this.stackSize = 0;
};

Stack.prototype.push = function(item) {
  this.storage[this.stackSize] = item;
  this.stackSize++;
};

Stack.prototype.pop = function() {
  this.stackSize && this.stackSize--;
  var result = this.storage[this.stackSize];
  delete this.storage[this.stackSize];
  return result;
};

Stack.prototype.size = function() {
  return this.stackSize;
};



