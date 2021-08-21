'use strict';

const Queue = require('../queue');

describe('Queue', ()=>{

    it('Can successfully enqueue into a queue', () => {
        let newQueue = new Queue();
        newQueue.enqueue(1);
        expect(newQueue.front.value).toEqual(1);
    })
    it('Can successfully enqueue multiple values into a queue', () => {
        let newQueue = new Queue();
        newQueue.enqueue(1);
        newQueue.enqueue(2);
        newQueue.enqueue(3);
        expect(newQueue.front.value).toEqual(1);
    })
     it('Can successfully dequeue out of a queue the expected value', () => {
        let newQueue = new Queue();
        newQueue.enqueue(1);
        newQueue.enqueue(2);
        newQueue.enqueue(3);
        newQueue.dequeue();
        expect(newQueue.front.value).toEqual(2);
    })
    it('Can successfully peek into a queue, seeing the expected value', () => {
        let newQueue = new Queue();
        newQueue.enqueue(1);
        newQueue.enqueue(2);
        newQueue.enqueue(3);
        newQueue.peek();
        expect(newQueue.front.value).toEqual(1);
    })
    it('Can successfully empty a queue after multiple dequeues', () => {
        let newQueue = new Queue();
        newQueue.enqueue(1);
        newQueue.enqueue(2);
        newQueue.enqueue(3);
        newQueue.dequeue();
        newQueue.dequeue();
        newQueue.dequeue();
        expect(newQueue.front).toBeNull();
    })
    it('Can successfully instantiate an empty queue', () => {
        let newQueue = new Queue();

        expect(newQueue.front).toBeNull();
    })
    it('Calling dequeue or peek on empty queue raises exception', () => {
        let newQueue = new Queue();
       
        expect((newQueue.isEmpty())).toEqual(true);
    })




})