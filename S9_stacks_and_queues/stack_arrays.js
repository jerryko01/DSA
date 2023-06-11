class Stack {
    constructor() {
        this.items = [];
        this.length = 0;
    }

    push(value) {
        this.items.push(value);
        this.length += 1;
    }

    peek() {
        return this.items[this.length - 1];
    }

    pop() {
        this.length -= 1;
        return this.items.pop();
    }

    isEmpty() {
        return this.length === 0 ? true : false;
    }
}

const myStack = new Stack();
myStack.push(2);
myStack.push(5);
myStack.push(3);
myStack.pop();
console.log(myStack)