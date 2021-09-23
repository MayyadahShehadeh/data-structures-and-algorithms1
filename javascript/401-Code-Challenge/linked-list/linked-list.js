'use strict';

const Node = require('./node');

class LinkedList {
    constructor() {
        this.head = null;
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


}

let newNode = new LinkedList();
newNode.addHead(1);
newNode.append(2);
newNode.include(2);
newNode.toString();
console.log(newNode.toString());
console.log(newNode);



module.exports = LinkedList;