'use strict';



class Stack {
    constructor() {
      this.dataArray = [];
      this.size = 0;
      this.maxArray = [];


    }
  
    push(element) {
      if (this.size === 0 || element >= this.getMax()) {
        this.maxArray.push(element);
      }
      else {
        this.maxArray.push(this.getMax());
      }
      this.size += 1;
      this.dataArray.push(element);
      return this.dataArray;
    }
  
    pop() {
      if (this.size > 0) {
        this.size -= 1;
        this.maxArray.pop()
        return this.dataArray.pop()
      }
    }
  
    peek() {
      return this.dataArray[this.size - 1]
    }
  
    getMax() {
      return this.maxArray[this.size - 1]
    }
  }

  let stack = new Stack();

stack.push(1);
stack.push(1);
stack.push(7);
stack.push(3);
stack.push(4);

console.log(stack);
console.log('max number', stack.getMax());

stack.pop();
console.log(stack);
console.log('max number', stack.getMax());

stack.pop();
console.log(stack);
console.log('max number', stack.getMax());

stack.pop();
console.log(stack);
console.log('max number', stack.getMax());

module.exports=Stack;