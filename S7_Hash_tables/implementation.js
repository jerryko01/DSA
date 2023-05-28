class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }

    set(key, value) {
        let hash = this._hash(key);
        if (!this.data[hash]) {
            this.data[hash] = [];
        }
        this.data[hash].push([key, value]);
        return this.data;
    }

    get(key) {
        let address = this._hash(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i += 1) {
                if (currentBucket[i][0] === key) {
                    console.log(currentBucket[i][1])
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }

    keys() {
        const keysArray = [];
        for (let i = 0; i < this.data.length; i += 1) {
            if (this.data[i]) {
                keysArray.push(this.data[i][0][0])
            }
        }
        return keysArray;
    }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapess', 100000);
myHashTable.set('apples', 100009);
myHashTable.set('oranges', 100009);
myHashTable.set('watermelon', 100009);
console.log(myHashTable.keys())