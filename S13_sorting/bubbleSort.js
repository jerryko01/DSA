const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const numbers1 = ["a", "b", "d", "A", "c"];


function bubbleSort(array) {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            // Concerns about the array[length] -> returns undefined and
            // the comparison is always going to be false
            if (array[j] > array[j + 1]) {
                // Swap numbers
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
}
bubbleSort(numbers1);
console.log(numbers1);
// [numbers[0], numbers[1]] = [numbers[1], numbers[0]]