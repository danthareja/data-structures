var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  //if the bucket is undefined, set the initial value
  if (!bucket) {
    this._storage.set(i, [[k, v]]);
  } else {
    //else push to the bucket with an existing key value pair array
    bucket.push([k,v]);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  for ( var j=0; j<bucket.length; j++){
    if ( bucket[j][0] === k ){
      return bucket[j][1];
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  // iterates through each bucket in the hash
  this._storage.each( function(bucket, bucketIndex, storage){
    // if bucket matches key of interest and contains an array
    if ( i === bucketIndex && bucket.length ){
      // loop through each array within the bucket and check if the key is there
      for (var j = 0; j < bucket.length; j++){
        // set the value of each array to be null
        bucket[j][1] = null;
      }
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
