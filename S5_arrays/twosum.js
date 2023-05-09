// Input: an array (will always be an Array?) of Ints (will always be Ints?)
// and a target Num
// Output: an array of Nums containing Indexes

// Brute Force - nested loop that goes through each item for each item.
// If their sum add up, then it return their respective indexes
// Time complexity: O(n^2); Space Complexity: O(1)

// Solution - declare an object that will have the complement as the key and
// index as the value
// As you for-loop through the nums array, first check if the complement matches the current number, and then if not add it to the object. If yes, return the complement and the current index.
var twoSum = function (nums, target) {
    // Edge Case
    if (nums.length === 2) {
        return [0, 1];
    }
    let complements = {};
    for (let i = 0; i < nums.length; i += 1) {
        let complement = target - nums[i];
        let currNum = nums[i];
        if (complements[currNum] !== undefined) {
            return [complements[currNum], i]
        } else {
            complements[complement] = i;
        }
    }
    return result;
};

console.log(twoSum([1, 10, 8, 8], 16));
