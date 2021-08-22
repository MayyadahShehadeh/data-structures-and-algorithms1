'use strict';

// const node = require('../linked-list/node');
const Stack = require('../stack-and-queue/stack');


class pseudoQueue{
constructor(){
this.stack1 = new Stack();
this.stack2 = new Stack();
}

enqueue(value){
// ----- first we should push all values from stack1 to stack2 and remove the values from stack1 ------
if(!this.stack1.top){
    console.log('stack1 is emepty');
}else{
    this.stack2.push(this.stack1.pop());
}
// --------- then we add the value that we want to add to stack1
this.stack1.push(value);

// ---------- then we return all the elemets from stack2 and add it to stack1
if(!this.stack2.top){
    console.log('stack2 is empty');
}else{
this.stack1.push(this.stack2.pop());
}
}

peek(){

    return this.stack1.peek();
}

dequeue(){
if(!this.stack1.top){
console.log('there is nothing to dequeue');
}
return this.stack1.pop();
}
}

let newPseudo = new pseudoQueue();

newPseudo.enqueue(1);
newPseudo.enqueue(2);

console.log('new pseudo:',newPseudo);
console.log('the top is::', newPseudo.peek());

newPseudo.enqueue(3);
console.log('pseudo22:',newPseudo);
console.log('the top is::', newPseudo.peek());

newPseudo.dequeue();
console.log('after dequeue:',newPseudo.dequeue());
console.log('newQueue.stack1.top.value', newPseudo.stack1.top.value);

module.exports = pseudoQueue;