// Input: A string that is divided into sections by spaces; The sections have
// numbers and different signs.
// Output: A string/section that has the longest length (numbers included)
// * If there are 2 words with the same length, return the first one.

// Brute Strength: split(' ') the String so it is divided into words into an Array.
// For each item in the new String Array, go over each letter to see if it is a 
// letter/Number or not. If not, splice the incorrect characters out of the String.
// After, see which word is the longest and return it. 

// Solution: Loop over the sen and match for the characters and numbers only! After
// the filtering is done, split the sen and figure out which item of the array has
// The longest length using a largestTemp variable for the initial longest variable
// And filtering through the array.

// Regular Expressions: [a-z] for characters, [0-9] for numbers, + for the spaces,
// and g for not stopping after the first letter, and i for not caring about upper or lower
// cases

function LongestWord(sen) {
    // code goes here  
    let pattern = /[a-z0-9]+/gi;
    let words = sen.match(pattern);
    let longestWord = words[0];
    for (let i = 1; i < words.length; i += 1) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;
}

// keep this function call here 
console.log(LongestWord(readline()));