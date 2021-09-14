'use strict';

function quickSort(array,left,right) {
if (left < right){

    let position = partition(array,left,right);
    quickSort(array,left,position - 1)
    quickSort(array,position + 1 , right)

}
  return array;
}

function partition(array,left,right){
    let pivot = array[right];
    let low = left - 1;
    for (let i = left; i < right; i++) {
if(array[i] <= pivot){
    low += 1;
    swap(array,i,low);
        }
    }
    swap(array ,right, low + 1);
    return low + 1 ;

}
function swap(array, i , low){
    let temp= array[i];
    array[i] = array[low];
    array[low]=temp;
}

let array=[8,4,23,5,16];
console.log(quickSort(array, 0 , array.length-1));

let array2 = [8,4,23,42,16,15]
console.log(quickSort(array2, 0 , array2.length-1));

module.exports = quickSort;