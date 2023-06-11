class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            let current = this.root;
            let bool = true;
            while (bool) {
                if (value < current.value) {
                    if (!current.left) {
                        current.left = newNode;
                        bool = false;
                    }
                    current = current.left;
                } else {
                    if (!current.right) {
                        current.right = newNode;
                        bool = false;
                    }
                    current = current.right;
                }
            }
        }
    }
    lookup(value) {
        if (!this.root) {
            return null;
        }
        let current = this.root;
        while (current) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else if (value === current.value) {
                return current;
            }
        }
        return false;
    }
    remove(value) {
        if (!this.root) {
            return false;
        }
        let currentNode = this.root;
        let parentNode = null;
        while (currentNode) {
            if (value < currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else if (currentNode.value === value) {
                // There is a match
                // Option 1: There is no right child
                if (currentNode.right === null) {
                    if (parentNode === null) {
                        this.root = currentNode.left;
                    } else {
                        // if parent.value > current value, make current
                        // left child a child of parent
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.left;
                            // if parent < current value, make left child
                            // a right child of parent
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.left;
                        }
                    }
                } else if (currentNode.right.left === null) {
                    if (parentNode === null) {
                        this.root = currentNode.left;
                    } else {
                        currentNode.right.left = currentNode.left;

                        // if parent > current, make right child
                        // of the left the parent

                        // To be continued!
                    }
                }
            }
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
// console.log(tree.lookup(171))
console.log(JSON.stringify(traverse(tree.root)));


function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}