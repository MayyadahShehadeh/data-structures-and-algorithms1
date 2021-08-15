'use strict';

const Node = require('../linked-list/node');

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

// ------------------------- insert before --------------------

    insertBefore(berforeVal, insertValue) {

        let node = new Node(insertValue);
        let currentNode = this.head;

        if (berforeVal == this.head.value) {
            node.next = this.head;
            this.head = node;

        } else {

            while (currentNode) {
                if (currentNode.next.value === berforeVal) {

                    node.next = currentNode.next;
                    currentNode.next = node;
                    break;
                }
                currentNode = currentNode.next;
            }
        }
    }





// ------------------------- insert after -----------------------




}

let newNode = new LinkedList();
newNode.addHead(1);
newNode.append(2);
newNode.include(2);
newNode.toString();
newNode.insertBefore(2,5)
console.log(newNode.toString());
console.log(newNode);



module.exports = LinkedList;