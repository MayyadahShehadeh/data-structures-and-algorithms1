'use strict';


const insertShiftArray =(arr,val)=>{
// declare empty array
    let newArr=[];
 // declare variable that takes the middle index of the array
    let midArr;
// seperate the array index into half and give the value of it to the variable 
// use ceil cause if the array index is odd num
    midArr=Math.ceil(arr.length/2);
// use for loop to iterate in the array and add the new value 
    for (let i = 0; i < arr.length; i++) {
        if (midArr == i) {
            newArr.push(val,arr[i]);
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

let array=[2,4,6,-8];
let array2=[42,8,15,23,42];

insertShiftArray(array,5);
insertShiftArray(array2,16);

console.log(insertShiftArray(array,5));
console.log(insertShiftArray(array2,16));
