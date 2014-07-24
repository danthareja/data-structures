var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = Object.create(queueMethods);

  someInstance.results = {};
  someInstance.enqLoc = 0;
  someInstance.deqLoc = 0;

  return someInstance;
};

var queueMethods = {
  enqueue : function(item) {
    this.results[this.enqLoc] = item;
    this.enqLoc++;
  },
  dequeue : function() {
    if ( this.enqLoc - this.deqLoc ) {
      var result = this.results[this.deqLoc];
      delete this.results[this.deqLoc];
      this.deqLoc++;
      return result;
    }
  },
  size : function() {
    return this.enqLoc - this.deqLoc;
  }
};


