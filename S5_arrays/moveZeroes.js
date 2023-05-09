// Input: an Array that has Ints, containing Zeroes. I can ask if there will be other data types of Nums
// Output: a new Array that has the relative order of the non-zero elements, and all the 0s in the end
// No Copy of the Array!!

// Brute Force: I was thinking that you can declare a 0 counter, then loop through the nums Array and while adding to the counter as 0s come up. If the 0s do come up, splice to get rid of them. At the end, push(0) as many times as the counter. Time Complexity: O(N^2) bc Splice is O(n). Space: O(1)

// Solution: declare a new result Array and a 0 counter. As you loop, if the item is not a 0, push it to the result Array. If 0, just add to the counter. After the Loop, push(0) as many times as the counter. This does create another Array
// Time Complexity: O(n), Space Complexity:O(n)

// Solution: using the pointer method (1 low, 1 high) to switch over 0s compared to non zeroes. Declare low and high variables, with high being low + 1.
// While loop for as long as high <= nums.length - 1
var moveZeroes = function (nums) {
    let low = 0;
    let high = 1;
    while (high <= nums.length - 1) {
        if (nums[low] !== 0) {
            low += 1;
            // high += 1
        } else {
            if (nums[high] !== 0) {
                [nums[low], nums[high]] = [nums[high], nums[low]];
                low += 1;
            }
            // high += 1
        }
        high += 1
    }
    return nums;
};

// console.log(moveZeroes([1, 0, 2, 3, 0]));

// Through this, can you figure out the lowest Num in an Array?
function lowestNum(nums) {
    let lowest = nums[0];
    for (let i = 1; i < nums.length; i += 1) {
        if (nums[i] < lowest) {
            lowest = nums[i];
        }
    }
    return lowest
}

console.log(lowestNum([3, 2, 5, 1, 4]))