'use strict';

class Node {
    constructor(value,next= null){
this.value = value,
this.next=next

    }
}


class LinkedList{
    constructor(){
        this.head = null;
    }

    insert(value){
let newNode = new Node(value);
if(!this.head){
    this.head= newNode;
}else{
    let current = this.head;
    while (current.next) {
        current = current.next;
    }
    
    current.next = newNode;
}
    }
include(value){
let current = this.head;
while(current){
if(current.value === value){
    return true
}
current = current.next;
}
return false;


}



    tostring(){
let current = this.head;
let string='';
while (current){
string = string + `{${current.value}}-->`;
current = current.next;
}
return string + 'null';
    }
    
    
}
function findMiddle(linkedList) {
   //write your answer here!
   let fast = linkedList.head;
   let slow = linkedList.head;
 
   while(fast.next && fast.next.next) {
     fast = fast.next.next;
     slow = slow.next;
   }
   return slow;
 }

let linked = new LinkedList();
linked.insert(2)
linked.insert(3)
linked.insert(4)

console.log(linked);
console.log('middle element',findMiddle(linked).value);

console.log(linked.tostring());
console.log(linked.include(1));











module.exports={
    Node,
    LinkedList
}