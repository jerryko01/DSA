// input: 2 arrays [0, 3, 4, 31] and [4, 6, 30]
// output: [0, 3, 4, 4, 6, 30, 31]


// Declare result Array
// let's combine the 2 arrays into 1 array first - concat the 2 arrays
// have a variable that is the lowest Number.MIN_VALUE
// Declare a result Array. As you loop through the Array, if the lowerst Number
// is greater 
function mergeSortedArrays(inputArr1, inputArr2) {
    const resultArray = [];
    let arr1index = 0;
    let arr2index = 0;

    while (arr1index < inputArr1.length || arr2index < inputArr2.length) {
        if (inputArr1[arr1index] <= inputArr2[arr2index] || inputArr2[arr2index] === undefined) {
            resultArray.push(inputArr1[arr1index]);
            arr1index += 1;
        }
        else if (inputArr1[arr1index] > inputArr2[arr2index] || inputArr1[arr1index] === undefined) {
            resultArray.push(inputArr2[arr2index]);
            arr2index += 1;
        }
    }
    return resultArray;
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]))