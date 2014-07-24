var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.enqLoc = 0;
  this.deqLoc = 0;
};

Queue.prototype.enqueue = function(item){
  this.storage[this.enqLoc] = item;
  this.enqLoc++;
};

Queue.prototype.dequeue = function() {
  if ( this.enqLoc - this.deqLoc ){
    var result = this.storage[this.deqLoc];
    delete this.storage[this.deqLoc];
    this.deqLoc++;
    return result;
  }
};

Queue.prototype.size = function() {
  return this.enqLoc - this.deqLoc;
};
