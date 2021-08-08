'use strict';
// 

let newArr=[];
const reverseFun=(arr)=>{
    for (let i=arr.length-1; i>=0; i--){
        newArr.push(arr[i]);
    }
    return newArr;
}

let numArr=[1,2,3,4,5,6];
reverseFun(numArr);
console.log(newArr);
