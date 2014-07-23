var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var enqLoc = 0;
  var deqLoc = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[enqLoc] = value;
    enqLoc++;
  };

  someInstance.dequeue = function(){
    if ( enqLoc - deqLoc ) {
      var result = storage[deqLoc];
      delete storage[deqLoc];
      deqLoc++;
      return result; 
    }
  };

  someInstance.size = function(){
    return enqLoc - deqLoc;
  };

  return someInstance;
};





