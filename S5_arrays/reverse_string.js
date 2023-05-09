// Create a function that reverses a String
// "cat" to "tac"

// First, loop through the String and add it to an Array
// Declare a Reverse Array and while looping through the StrArray in reverse,
// Just push each item to the Answer Array
// After, Add each item to a blank answerStr
// Return answerStr


// Second thought, just loop inversely from the String and get the 
// Reverse String
function reverse(inputStr) {
    // input String converted to Reverse Array
    reverseArray = [];
    for (let i = inputStr.length - 1; i >= 0; i -= 1) {
        reverseArray.push(inputStr[i]);
    }
    // Reverse Array turned into String
    // let resultStr = "";
    // for (letter of reverseArray) {
    //     resultStr += letter;
    // }
    // return resultStr;

    // You can also use Array.join('') to convert to String
    return reverseArray.join('');
}

function reverse1(inputStr) {
    return inputStr.split('').reverse().join('');
}

reverse2 = (inputStr) => inputStr.split('').reverse().join('')


console.log(reverse2("yrreJ si emaN yM iH"));