'use strict';


const Node = require('../linked-list/node');

class LinkedList {
    constructor() {
        this.head = null;
    }
// ------------ add new node to the linked list -------------
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
    
    // ------------------------ check if the linked lsit is palindrome --------- 
     isPalindrome (head) {
         
         let slow = head,
             fast = head;
        // pass empty or single-item linked lists
        if (!head){
            return true;
        }
        // traverse the linked list in order to find the mid-point (slow)
        while (fast.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // Reverse the second half of the linked list
        slow.next = reverseLinkedList(slow.next);
        slow = slow.next;

        // compare the original linked list with the reversed second half
        while (slow) {
            if (head.val !== slow.val) {
                return false;
            }
            head = head.next;
            slow = slow.next;
        }
        return true;
    };

    reverseLinkedList = function (head) {
        let nextNode = null;
        let previousNode = null;
        while (head) {
            nextNode = head.next;
            head.next = previousNode;
            previousNode = head;
            head = nextNode;
        }
        return previousNode;
    };

}
    
    
    
    


let newNode = new LinkedList();
newNode.addHead(5);
newNode.addHead(6);
newNode.append(3);
newNode.append(3);
newNode.append(5)
newNode.include(2);
newNode.toString();

newNode.isPalindrome(this.head);
console.log('tostring',newNode.toString());
console.log('is Palindrome?????',newNode.isPalindrome(this.head));
console.log('new nodeee',newNode);



module.exports = LinkedList;
