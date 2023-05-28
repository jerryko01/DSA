
// Input: A nums array that includes both positive and negative numbers, and a k that shows the number of steps of rotation
// Output: A new array that has been modified

// Solution: create a new Array called popped that will store the items that need to be moved. Create another variable that is startIndex, which is nums.length - k. With a for loop that starts at startIndex, start pushing the variables that need to be moved. Concat the 2 arrays, then using a for loop pop as many times as k.

// Solution: You need a helper function for this: create a helper function called reverse that takes in an array, a left index, and a right index. Basic reversal function that has a temp and 2 indexes to be switched out. However, you need to reverse a whole array, so have a while loop who conditional is li < ri. Subtract 1 from ri and add 1 to ri so the loop can end.
// In the real solution function, reverse the whole array, then the first part (the 0 to k-1 for the range to reverse), then the second part (k to the end).
// Time Complexity: O(n) Space Complexity: O()
var reverse = function (inputArr, li, ri) {
    while (li < ri) {
        let temp = inputArr[li];
        inputArr[li] = inputArr[ri]
        inputArr[ri] = temp;
        ri -= 1;
        li += 1;
    }
}
var rotate = function (nums, k) {
    // Edge Cases
    if (k > nums.length) {
        k = k % nums.length;
    }
    // Edge Cases
    if (nums.length === 1 || k === 0 || k === nums.length) {
        return nums;
    }
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
    return nums;
};