'use strict';

function insertionSort(array) {

    for (let i = 1; i < array.length; i++) {
        let j = i - 1;
        let temp = array[i];

        while (j >= 0 && temp < array[j]) {
            array[j + 1] = array[j];
            j = j - 1;
        }

        array[j + 1] = temp;

    }
    return array;
}

let array=[8,4,23,16];
insertionSort(array);
console.log(insertionSort(array));

let array2 = [8,4,23,42,16,15]
console.log(insertionSort(array2));

module.exports = insertionSort;