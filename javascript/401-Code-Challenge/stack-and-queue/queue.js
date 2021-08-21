'use strict';

const Node = require('../linked-list/node');
// First in First out
// Last in last out 
class Queue {

    constructor() {
        this.front = null;
        this.rear = null;
    }

    enqueue(value) {
        let addNode = new Node(value);
        if (!this.front){
            this.front = addNode;
            this.rear = addNode;
        }
        this.rear.next = addNode;
        this.rear = addNode;
    }

    dequeue() {
        if (!this.front){
            console.log('no item to delete');
        }
        let removedNode = this.front;
        this.front = this.front.next;
        removedNode.next = null;
    }

    peek() {
        if(!this.front){
            console.log('there is no front');
        }
        return this.front.value;
    }

    isEmpty() {
        if (!this.front) {
            return true;
        }
        return false;
    }

}
let newQueue = new Queue();

newQueue.enqueue(1);
newQueue.enqueue(2);
newQueue.enqueue(3);
newQueue.enqueue(4);

console.log('peek(front):',newQueue.peek());
console.log('is empty?',newQueue.isEmpty());
console.log(newQueue);


newQueue.dequeue()
console.log('after dequeue',newQueue);
console.log('peek(front):',newQueue.peek());




module.exports = Queue;