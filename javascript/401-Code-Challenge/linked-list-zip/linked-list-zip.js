'use strict';

const LinkedList = require('../linked-list/linked-list');

const linkedListZip = (list1,list2) => {
let list3 = new LinkedList();

list3.append(list1.head.value);
list3.append(list2.head.value);

let current1 = list1.head;
let current2 = list2.head;

while (current1.next ||current2.next) {
if (current1.next) {
list3.append(current1.next.value);
current1 = current1.next;
}



if (current2.next) {
list3.append(current2.next.value);
current2 = current2.next;
}
}

return list3;
}


let list1 = new LinkedList();
list1.append(1);
list1.append(3);
list1.append(5);
list1.append(7);
list1.append(9);

let list2 = new LinkedList();
list2.append(2);
list2.append(4);
list2.append(6);

console.log('output::',linkedListZip(list1,list2).toString());

module.exports=linkedListZip;