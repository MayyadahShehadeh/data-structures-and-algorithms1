'use strict';

const Node = require('../linked-list/node');

class LinkedList {
    constructor() {
        this.head = null;
        this.counter=0;
    }

    append(value) {
        // create a node for this value
        let newNode = new Node(value);
       
        if (!this.head) {
            this.head = newNode;
        } else {
            let currentNode = this.head;
            while(currentNode.next) {
                currentNode = currentNode.next;
            }
            // reached the end of the linkedlist
            currentNode.next = newNode;
        }
    }

// -------------- add head ------------

    addHead(value) {
        let newNode = new Node(value);

    if (!this.head) { // if it is empty will add node
        this.head = newNode;
    } else {
        newNode.next = this.head;
        this.head = newNode;
    }
    }

// ---------------- check if the values is included in the linked list -----------


include(value){
let boolean = false;
let check = this.head;
while(check){
    if (check.value === value){
       boolean =true;
       console.log(' is it included : ', boolean);
       return boolean;
    }
    check=check.next;

}
}

// ---------------- convert to string -----------

    toString() {

       
        let head = this.head;
        let string="";
        while (head) {
            string=string + `{${head.value}}->`;
            head = head.next;
        }
   
        return (string=string+'null');

    }


// --------------------------------------------------------------


    kthFromEnd(k) {
        let current = this.head;
     let newArray=[];
        while(current){
newArray.push(current.value);
current= current.next;
        }
        if(k>newArray.length){
            return 'error';
        }
        newArray.reverse();
        return newArray[k];

    }


}

let newNode = new LinkedList();
newNode.addHead(1);
newNode.append(2);
newNode.append(4);
newNode.append(7);

// newNode.addHead(3);

newNode.include(2);
newNode.toString();

console.log(newNode.toString());
console.log(newNode);
console.log('kth:',newNode.kthFromEnd(1));
console.log('kth:',newNode.kthFromEnd(0));
console.log('kth:',newNode.kthFromEnd(6));


module.exports = LinkedList;