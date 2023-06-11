class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }
    push(value) {
        let newNode = new Node(value);
        if (this.bottom === null) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            this.top.next = newNode;
            this.top = newNode;
        }
        this.length += 1;
    }
    pop() {
        if (this.length === 1) {
            this.bottom = null;
            this.top = null;
        } else {
            let current = this.bottom;
            for (let i = 0; i < this.length - 2; i += 1) {
                current = current.next;
            }
            current.next = null;
            this.top = current;
        }
        this.length -= 1;
    }
    isEmpty() {
        if (this.length === 0) {
            return true;
        }
        return false;
    }
}

const myStack = new Stack();
myStack.push("Discord");
myStack.push("Udemy");
myStack.push("Google");
myStack.pop();
console.log(myStack);