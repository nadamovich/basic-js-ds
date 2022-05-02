const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.ROOT = null;
  }

  root() {
    return this.ROOT;
  }

  add(data) {
    this.ROOT = addValue(this.ROOT, data); 
    function addValue(node, data) { 
      if (!node) return new Node(data)
      if (node.data === data) return node
      data < node.data? node.left = addValue(node.left, data) : node.right = addValue(node.right, data)
      return node
    }
  }

  has(data) {
    function hasValue(node, data) { 
      if (!node) return false
      if (node.data === data) return true
      return data < node.data? hasValue(node.left, data) : hasValue(node.right, data)    
  }   return hasValue(this.ROOT, data) 
}

  find(data) {
    return findValue(this.ROOT, data); 
    function findValue(node, data) {
      if (!node) return null
      if (node.data === data) return node
      return data < node.data? findValue(node.left, data) : findValue(node.right, data)
    }
  }

  remove(data) {
    this.ROOT = removeValue(this.ROOT, data) 
    function removeValue(node, data) {
      if (!node) return null
      if (data < node.data) { 
        node.left = removeValue(node.left, data) 
        return node
      } else if (data > node.data) {
        node.right = removeValue(node.right, data) 
        return node;
      } else {
        if (!node.left && !node.right) return null
        if (!node.left) return node = node.right
        if (!node.right) return node = node.left
        let maxLeft = node.left
        while (maxLeft.right) {
          maxLeft = maxLeft.right
        }
        node.data = maxLeft.data
        node.left = removeValue(node.left, maxLeft.data);
        return node
      }
    }
  }

  min() {
    let node = this.ROOT
    if (!node) return null
    while (node.left) { 
      node = node.left
    }
    return node.data
  }

  max() {
    let node = this.ROOT;
    if (!node) return null
    while (node.right) { 
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};