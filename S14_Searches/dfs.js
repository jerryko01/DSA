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
    breadthFirstSearch() {
        let currentNode = this.root;
        let list = [];
        let queue = []; // keeps track of the level we are at
        queue.push(currentNode);
        while (queue.length > 0) {
            currentNode = queue.shift();
            list.push(currentNode.value);
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        return list;
    }

    breadthFirstSearchRecursive(queue, list) {
        if (queue.length === 0) {
            return list;
        }
        let currentNode = queue.shift();
        list.push(currentNode.value);
        if (currentNode.left) {
            queue.push(currentNode.left);
        }
        if (currentNode.right) {
            queue.push(currentNode.right);
        }
        return this.breadthFirstSearchRecursive(queue, list)
    }

    DFSInorder() {
        return traverseInOrder(this.root, []);

    }

    DFSPostorder() {
        return traversePostOrder(this.root, []);
    }

    DFSPreorder() {
        return traversePreOrder(this.root, []);
    }
}

function traverseInOrder(node, list) {
    console.log(node.value)
    if (node.left) {
        traverseInOrder(node.left, list);
    }
    list.push(node.value); // This placement means that the lowest number gets to be put first 
    // in the list
    if (node.right) {
        traverseInOrder(node.right, list);
    }
    return list;
}

function traversePreOrder(node, list) {
    console.log(node.value)
    list.push(node.value); // This placement means that the lowest number gets to be put first 
    // in the list
    if (node.left) {
        traversePreOrder(node.left, list);
    }
    if (node.right) {
        traversePreOrder(node.right, list);
    }
    return list;
}

function traversePostOrder(node, list) {
    console.log(node.value)
    if (node.left) {
        traversePostOrder(node.left, list);
    }
    if (node.right) {
        traversePostOrder(node.right, list);
    }
    list.push(node.value);
    return list;
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(tree.DFSPostorder());