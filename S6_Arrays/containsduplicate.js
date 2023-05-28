// Input: an Array containing numbers
// Output: A boolean value that shows if there are repeated items or not

// Brute Strength: a nested for-loop that goes over the rest of the nums array for each item in the nums array. If there is a duplicate, return true; If the for-loop ends, return false.
// Time Complexity: O(n^2); Space Complexity: O(1)

// Solution: Create a new Set() to store variables that you go through. For-loop ONCE over the nums array and have a conditional that checks if Set has the current item (Set.has()). If yes, return true. If not, add that item into the Set. Return false if the for loop is completed. 
// Time Complexity: O(n); Space Complexity: O(n)
var containsDuplicate = function (nums) {
    let set = new Set();
    for (let i = 0; i < nums.length; i += 1) {
        if (set.has(nums[i])) { // This is O(1)
            return true;
        } else {
            set.add(nums[i])
        }
    }
    return false;
    // let object = {};
    // for(let i = 0; i < nums.length; i += 1) {
    //     if(nums[i] in object) {
    //         return true;
    //     } else {
    //         object[nums[i]] = true;
    //     }
    // }
    // return false;
};