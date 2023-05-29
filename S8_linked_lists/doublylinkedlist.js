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
    constructor(value, next = null, prev = null) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const node = new Node(value);
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
        this.length += 1;
    }

    prepend(value) {
        this.head = new Node(value, this.head);
        this.head.next.prev = this.head;
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
        let follower = current.next;
        node.next = current.next;
        node.prev = current;
        follower.prev = node;
        current.next = node;
        this.length += 1;
    }

    remove(index) {
        let current = this.traverseTo(index - 1);
        let follower = current.next.next;
        current.next = follower;
        follower.prev = current;
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
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(1, 11)
myLinkedList.remove(3)


// console.log(myLinkedList);
console.log(myLinkedList);
console.log(myLinkedList.list())