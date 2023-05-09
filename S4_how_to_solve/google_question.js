// inputs: an array with Integers (Negatives included); 
// a Number that is the Sum
// output: Boolean value, true or false

// Already sorted out Array!

// examples:
// input: array = [1, 2, 3, 9], 8 
// output: false

// input: array = [1, 2, 4, 4], 8
// output: true


// naive/brute-force solution
// Time Complexity: O(n^2); Space Complexity: O(1)
function hasPairWithSum(inputArr, sum) {
    for (let i = 0; i < inputArr.length - 1; i += 1) {
        for (let j = i + 1; j < inputArr.length; j += 1) {
            if (inputArr[i] + inputArr[j] === sum) {
                return true;
            }
        }
    }
    return false;
}


// Better Solution using Linear Time Complexity
// Set 2 variables that are the end indexes of the array
// If the sum of those 2 variables are lower than sum, low += 1
// If the sum of those 2 vairables are higher than sum, high += 1
// Doesn't work out? Return false
// Time Complexity: O(n); Space Complexity: O(1)
function hasPairWithSum2(inputArr, sum) {
    let low = 0;
    let high = inputArr.length - 1;
    while (low < high) {
        if (inputArr[low] + inputArr[high] < sum) {
            low += 1;
        }
        else if (inputArr[low] + inputArr[high] > sum) {
            high -= 1;
        }
        else if (inputArr[low] + inputArr[high] === sum) {
            return true;
        }
    }
    return false;
}

// What if the Sorted Array wasn't sorted Anymore?
// As we loop, we can add the complement of the item that would 
// give us the sum in an Array
// Time Complexity: O(n); Space Complexity: O(n)
function hasPairWithSum3(inputArr, sum) {
    const complements = new Set();
    for (let i = 0; i < inputArr.length; i += 1) {
        if (complements.has(inputArr[i])) {
            return true;
        }
        complements.add(sum - inputArr[i]);
    }
    return false;
}


console.log(hasPairWithSum3([1, 2, 4, 9], 12));
