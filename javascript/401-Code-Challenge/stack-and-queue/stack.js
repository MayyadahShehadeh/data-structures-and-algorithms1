'use strict';
const Node = require('../linked-list/node');

class Stack {
    constructor() {
        this.top = null;
    }

    push(value) {
        let newNode = new Node(value);
        if (!this.top) {
            console.log('there is no top');
        }
        newNode.next = this.top
        this.top = newNode;

    }
    pop() {
        if (!this.top) {
            console.log('the stack is empty');
        }
        let removedNode = this.top;
        this.top = removedNode.next;
        removedNode.next = null;
        return removedNode.value;

    }

    peek() {
        if(!this.top){
            console.log('there is no top');
        }
        return this.top.value;
    }


    isEmpty() {
        if (!this.top) {
            return true;
        }
        return false;
    }


}
const newStack = new Stack();

newStack.push(1)
newStack.push(5)
newStack.push(44)
newStack.push(8)
newStack.push(2)

newStack.isEmpty()
console.log(newStack);
console.log('is empty?',newStack.isEmpty() );
console.log('peek', newStack.peek());
console.log('pop element:', newStack.pop());
console.log('pop element2:', newStack.pop());
console.log(newStack);

module.exports = Stack;
