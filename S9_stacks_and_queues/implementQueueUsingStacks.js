// input: a list of commands and numbers to put into the queue
// output: a list of what the queue would return if the queue went through the commands 

// Solution: stack1 is going to have the first in the bottom of the array while the last is going to be at the end.
// stack2 is going to have the first at the top (so the pop() and peep() will work efficiently in an array)
// Create a helper function called Prepare that has the items in stack1 pushed to stack2 in reverse order so the fist item added
// goes to the last item in stack2. This only works when stack2 is empty!!!


function myQueue() {
    this.stack1 = [];
    this.stack2 = [];
}

myQueue.prototype.prepare = function () {
    if (this.stack2.length === 0) {
        while (this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop());
        }
    }
}

myQueue.prototype.push = function () {
    this.stack1.push(x);
}

myQueue.prototype.pop() = function () {
    this.prepare();
    return this.stack2.pop();
}

myQueue.prototype.peek = function () {
    this.prepare();
    return this.stack2[this.stack2.length - 1];
}

myQueue.prototype.empty = function () {
    return this.stack1.length === 0 && this.stack2.length === 0;
}