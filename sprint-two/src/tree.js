var _each = function(collection, iterator) {
  if( Array.isArray(collection) ){
    for(var i = 0; i < collection.length; i++){
      iterator(collection[i], i, collection);
    }
  } else {
    for(var key in collection){
      iterator(collection[key], key, collection);
    }
  }
};
var _extend = function(obj) {
  var args = Array.prototype.slice.call(arguments, 1);
  _each(args, function(arg){
    _each(arg, function(value, key){
      obj[key] = value;
    });
  });
  return obj;
};

var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var newChild = makeTree(value);
  this.children.push(newChild);
};

treeMethods.contains = function(target, currentTree){
  currentTree = currentTree || this;
  console.log(target, currentTree.value, currentTree.children);

  // Return true if current node value = target
  if (currentTree.value === target) {
    return true;
  } else {
    // iterate through child nodes
    for (var i = 0; i < currentTree.children.length; i++) {
      if ( currentTree.children[i].contains(target, currentTree.children[i]) ){
        return true;
      };
    }
  }
  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
