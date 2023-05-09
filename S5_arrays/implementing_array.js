class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length += 1;
        return this.length;
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length -= 1;
        return lastItem;
    }
    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }
    // check this
    shiftItems(index) {
        for (let i = index; i < this.length - 1; i += 1) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length -= 1;
    }
}


const newArray = new MyArray();
newArray.push('a');
newArray.push('b');
newArray.push('c');
newArray.delete(1);

console.log(newArray);