'use strict';

const BinarySearch = (sortedArr, searchKey) => {
    for (let i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i] === searchKey) {
            return i;
        }
    }
    return -1;
}
let array = [4, 8, 15, 16, 23, 42];
BinarySearch(array,15);
console.log(BinarySearch(array,15));

BinarySearch(array,14);
console.log(BinarySearch(array,14));
