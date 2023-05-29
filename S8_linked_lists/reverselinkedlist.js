// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const node = new Node(value);
        this.tail.next = node;
        this.tail = node;
        this.length += 1;
        return this;
    }

    prepend(value) {
        this.head = new Node(value, this.head)
        this.length += 1;
    }

    traverseTo(index) {
        let i = 0;
        let current = this.head;
        while (i < index) {
            current = current.next;
            i += 1;
        }
        return current;
    }

    insert(index, value) {
        if (index === 0) {
            this.prepend(value);
        }
        if (index >= this.length) {
            this.append(value)
        }
        let node = new Node(value);
        let current = this.traverseTo(index - 1);
        node.next = current.next;
        current.next = node;
        this.length += 1;
    }

    remove(index) {
        let current = this.traverseTo(index - 1);
        current.next = current.next.next;
        this.length -= 1;
    }

    list() {
        let arr = [];
        let current = this.head;
        while (current !== null) {
            arr.push(current.value);
            current = current.next;
        }
        return arr;
    }

    reverse() {
        if (!this.head.next) {
            return this.head;
        }
        let first = this.head;
        this.tail = this.head;
        let second = this.head.next;
        while (second) {
            let temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        // The head still points to the initial value, so once the 
        // pointers are reversed, head.next = null
        this.head.next = null;
        // For the head to go all the way back to the last value,
        // The head should go to "first"
        this.head = first;

        // let prev = null;
        // let curr = this.head;
        // let next = null;
        // while (curr !== null) {
        //     next = curr.next;
        //     curr.next = prev;
        //     prev = curr;
        //     curr = next;
        // }
    }
}

const myLinkedList = new LinkedList(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.append(5);

// myLinkedList.remove(3)


// console.log(myLinkedList);
console.log(myLinkedList.list());
myLinkedList.reverse();
console.log(myLinkedList.list());
console.log(myLinkedList.tail)