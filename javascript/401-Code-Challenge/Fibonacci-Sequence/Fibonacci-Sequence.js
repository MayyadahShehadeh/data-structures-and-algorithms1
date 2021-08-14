'use strict';

const fiboFunction = (inputLength) => {

    let fiboArray = [0, 1],
        num1 = fiboArray[0],
        num2 = fiboArray[1],
        resultNum;

    for (let i = 2; i <= inputLength; i++) {
        resultNum = num1 + num2;
        num1 = num2;
        num2 = resultNum;
        fiboArray.push(resultNum);
    }
    return fiboArray[inputLength];
}

fiboFunction(14);
console.log(fiboFunction(14));