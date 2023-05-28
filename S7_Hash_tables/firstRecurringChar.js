// Return the first Recurring Character of an Array
// Input: an array of different Ints
// Output: an Int that is the first recurring number

// Brute-Force Solution: a nested loop that goes over all the values of the 
// array for each item. If there is a match, then return that number
// Time Complexity: O(n^2); Space Complexity: O(1)

// Solution: declare a set. While looping, if the Set contains the current
// number, then return that current number. If not, add that current num
// and move on to the next item.
// Time Complexity: O(n); Space Complexity: O(n)

const firstRecurringChar = (inputArr) => {
    let set = new Set();
    for (let i = 0; i < inputArr.length; i += 1) {
        if (set.has(inputArr[i])) {
            return inputArr[i];
        }
        set.add(inputArr[i]);
    }
    return undefined;
}

function firstRecurringCharacter2(input) {
    let found;
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length - 1; j++) {
            if (input[i] === input[j]) {
                if (found && j < found) {
                    found = j
                }
                if (!found) {
                    found = j
                }
            }
        }
    }
    return input[found]
}
console.log(firstRecurringCharacter2([1, 2, 2, 1, 4]));