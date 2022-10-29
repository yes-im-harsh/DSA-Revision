class Node {
  constructor(value) {
    this.right = null;
    this.left = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root == null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          //left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          //right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  lookup(value) {
    if (!this.root) {
      return false;
    } else {
      let currentNode = this.root;
      while (currentNode) {
        if (value < currentNode.value) {
          currentNode = currentNode.left;
        } else if (value > currentNode.value) {
          currentNode = currentNode.right;
        } else if ((value = currentNode.value)) {
          return value;
        }
      }
      return null;
    }
  }

  //Finding Min & Max. (Left Most Value is Minimum & Right Most Value is Maximum)

  // findMin() {
  //   if (!this.root) {
  //     return null;
  //   }
  //   let currentNode = this.root;
  //   while (currentNode.left !== null) {
  //     currentNode = currentNode.left;
  //   }

  //   return currentNode.value;
  // }

  // findMax() {
  //   if (!this.root) {
  //     return null;
  //   }

  //   let currentNode = this.root;
  //   while (currentNode.right !== null) {
  //     currentNode = currentNode.right;
  //   }
  //   return currentNode.value;
  // }

  //Finding Min & Max Using Recursion.

  findMin(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.findMin(root.left);
    }
  }

  findMax(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.findMax(root.right);
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

JSON.stringify(traverse(tree.root));

tree.lookup(15);
tree.lookup(7);
// tree.findMin()
// tree.findMax()
tree.findMax(tree.root);
tree.findMin(tree.root);

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
