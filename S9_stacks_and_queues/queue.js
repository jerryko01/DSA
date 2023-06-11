class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (this.first === null) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length += 1;
        return this;
    }

    dequeue() {
        if (!this.first) {
            return null;
        }
        this.first = this.first.next;
        if (this.first === this.last) {
            this.last = null;
        }
        this.length -= 1;
    }
    isEmpty() {
        return this.length === 0 ? true : false;
    }
}

const myQueue = new Queue();
myQueue.enqueue("Joy");
myQueue.enqueue("Anne");
myQueue.enqueue("Pavel");
myQueue.enqueue("Matt");
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue);