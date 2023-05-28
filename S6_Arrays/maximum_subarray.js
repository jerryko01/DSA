// Input = an Array with both Positive and Negative Integers
// Output = an Int of the largest sum of the largest subarray possible

// Brute Force: Declare a max variable and have a nested for-loop that goes over the rest of nums and calculates what the expected sum would be for each added array. If the added item increases the max variable, change the max. If not, just iterate to the next. Do this for every item. Time Complexity: O(n^2); Space Complexity: O(1)

// Initialize 2 values: temp and sum. Temp will be 0 and sum will be nums[0] Temp will be holding all possible positive sums of the array while sum will hold the largest as the loop goes.
// After initialization, add nums[i] to temp. If temp is larger than sum, then sum will be temp. If temp is less than 0, then temp will be 0 because that means that the current number will be a negative, and for the maximum sum you don't start with a negative number.
// Return Sum. Sum only changes when temp (added on sum) becomes larger than the previous sum. Time Complexity: O(n); Space Complexity: O(1)
var maxSubArray = function (nums) {
    // Edge Case
    if (nums.length === 1) {
        return nums[0];
    }
    let temp = 0;
    let sum = nums[0];
    for (let i = 0; i < nums.length; i += 1) {
        temp += nums[i];
        if (temp > sum) {
            sum = temp;
        }
        if (temp < 0) {
            temp = 0;
        }
    }
    return sum;
};