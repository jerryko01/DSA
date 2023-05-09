// Given 2 arrays, create a function that let's a user know
// (true/false) whether these 2 arrays contain any common items

// Examples:
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
// returns false
// OR...
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];
// returns true


// Input - 2 arrays (can they be other data types? Size limit?)
// Returns boolean value

// Naive/Brute Force - nested for loop going through array2 for each 
// item in array1   Time: O(a*b)/Quadratic Time, so it is not time-efficient
// Space Complexity: O(1)



// Solution: Why not use an Object to make the time more efficieint?

// let's convert the first array to look like this:
// arr1Obj{
// a: true,
// b: true,
// c: true,
// x: true
//}

// When we loop over inputArr2, we can check if an item matches with a 
// key in the arr1Object and return the value. False if the loop ends

commonItemExists = (inputArr1, inputArr2) => {
    // Loop through first array and create obj where properties
    // === items in the array
    // Loop through second array and check if an item in second
    // array exists on created object

    // The Time Complexity will be O(a+b). Space Complexity will be O(a)

    if (inputArr1.length === 0 || inputArr2.length === 0) {
        return false;
    }

    // This can be modularized - put this in a different helper function
    let arr1Obj = {};
    for (item of inputArr1) {
        if (!arr1Obj[item]) {
            arr1Obj[item] = true;
        }
    }

    for (let i = 0; i < inputArr2.length; i += 1) {
        let item = inputArr2[i];
        if (arr1Obj[item]) {
            return true
        }
    }
    return false;
}


console.log(commonItemExists(['a', 'b', 'c', 'x'], ['z', 'y', 'i']));
console.log(commonItemExists(['a', 'b', 'c', 'x'], ['z', 'y', 'x']));

// After solving the problem, think about how errors might arise
// Check for null, empty arrays, undefined, no params, etc. Ask for limitations

// Ask for improvements - I can create a cleaner, more concise code