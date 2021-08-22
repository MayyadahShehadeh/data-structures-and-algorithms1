'use strict';

const queuePseudo = require('../stack-queue-pseudo');

describe('queue Pseudo', ()=>{

it('Can successfully push onto queue Pseudo',() =>{
let newQueue= new queuePseudo();
newQueue.enqueue(1);
newQueue.enqueue(2);
newQueue.enqueue(3);
expect(newQueue.stack1.top.value).toEqual(1);
})

it('Can successfully pop off the queue',() =>{
    let newQueue= new queuePseudo();
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    newQueue.enqueue(3);
    newQueue.dequeue();
    expect(newQueue.dequeue()).toEqual(3);
    })


})