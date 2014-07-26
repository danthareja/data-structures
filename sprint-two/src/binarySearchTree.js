var makeBinarySearchTree = function(value){
  var searchTree = Object.create(searchTreeMethods);
  searchTree.value = value;
  searchTree.left = null;
  searchTree.right = null;
  return searchTree;
};

var searchTreeMethods = {
  insert: function(v, currentNode){
    // initialize currentNode if not defined
    currentNode = currentNode || this;

    // desired value cannot equal current node value
    if ( v === currentNode.value ){
      return;
    }
    // check if desired value is less than current node's value
    else if ( v < currentNode.value &&  v !== currentNode.value ){
      // if the current's node left property is null, insert new node with desired value, else search left
      if ( currentNode.left ){
        currentNode.insert(v, currentNode.left);
      } else {
        currentNode.left = makeBinarySearchTree(v);
      }
    }
    // check if desired value is greater than current node's value
    else {
      // if the current's node right property is null, insert new node with desired value, else search right
      if ( currentNode.right ){
        currentNode.insert(v, currentNode.right);
      } else {
        currentNode.right = makeBinarySearchTree(v);
      }
    }
  },
  contains: function(v, currentNode){
    // initialize currentNode if not defined
    currentNode = currentNode || this;

    // if the desired value is greater than the current node's value, continue to right
    if ( v > currentNode.value && currentNode.right) {
      return currentNode.contains(v, currentNode.right);
    // if the desired value is less than the current node's value, continue to left
    } else if ( v < currentNode.value && currentNode.left) {
      return currentNode.contains(v, currentNode.left);
    // if the desired value is equal to the current node's value, value has been found
    } else {
      return true;
    }
  },
  depthFirstLog: function(callback, currentNode){
    // initialize currentNode if not defined
    currentNode = currentNode || this;

    // perform callback on current node
    callback(currentNode.value);

    // modify value of left (if exists) and all subsequent children
    if ( currentNode.left ){
      currentNode.depthFirstLog( callback, currentNode.left );
    }

    // modify value of right (if exists) and all subsequent children
    if ( currentNode.right ){
      currentNode.depthFirstLog( callback, currentNode.right );
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


