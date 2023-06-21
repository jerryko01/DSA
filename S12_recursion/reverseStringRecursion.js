function reverseString(str) {
    let arrayStr = str.split("");
    let reversedArray = [];
    function transferArray(array) {
        if (array.length > 0) {
            reversedArray.push(array.pop());
            transferArray(array);
        }
    }
    transferArray(arrayStr);
    return reversedArray.join("")
}


function reverseStringRecursive(str) {
    if (str === "") {
        return "";
    } else {
        return reverseStringRecursive(str.slice(1)) + str[0];
    }
}

console.log(reverseString('gnirtSdesrever'));
console.log(reverseStringRecursive('gnirtSdesrever'));
