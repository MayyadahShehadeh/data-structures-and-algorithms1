'use strict';

const Node = require('../linked-list/node');



class AnimalShelte{
constructor(){
this.front = null;
this.rear = null;

}

enqueue(animal) {
    if(animal !== 'dog' || animal !== 'cat'){
        console.log('please enter \'dog\' or \'cat\' ');
    }
        let addNode = new Node(animal);

        if (!this.front){
            this.front = addNode;
            this.rear = addNode;
        }
        this.rear.next = addNode;
        this.rear = addNode;
    }

    dequeue(pref) {
        if (!this.front) {
            console.log('no item to delete');
        }
        if (pref === 'dog' || pref === 'cat') {
            let removedNode = this.front;
            this.front = removedNode.next;
            removedNode.next = null;
            return removedNode.value;

        } else {
            return null;
        }
    }




}

module.exports = AnimalShelte;