const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
    const length = array.length;
    for (let i = 0; i < length; i += 1) {
        if (array[i] < array[0]) {
            array.unshift(array.splice(i, 1)[0]) // The element you want out to go first
        } else {
            for (let j = 1; j < length; j += 1) {
                if (array[i] > array[j - 1] && array[i] < array[j]) {
                    array.splice(j, 0, array.splice(i, 1)[0]);
                }
            }
        }
    }
}

insertionSort(numbers);
console.log(numbers);