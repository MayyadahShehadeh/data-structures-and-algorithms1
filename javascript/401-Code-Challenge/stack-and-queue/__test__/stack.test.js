'use strict';

const Stack = require('../stack');

describe('stack', () => {

    it('Can successfully push onto a stack', () => {
        let newStack = new Stack();
        newStack.push(1);
        expect(newStack.top.value).toEqual(1);
    })

    
    it('Can successfully push multiple values onto a stack', () => {
        let newStack = new Stack();
        newStack.push(1);
        newStack.push(2);
        newStack.push(3);
        expect(newStack.top.value).toEqual(3);
        expect(newStack.top.next.value).toEqual(2);

    })
  
    it('Can successfully pop off the stack', () => {
        let newStack = new Stack();
        newStack.push(1);
        newStack.push(2);
        newStack.push(3);
        newStack.pop();
        expect(newStack.top.value).toEqual(2);
       
        
    })
    it('Can successfully empty a stack after multiple pops', () => {
        let newStack = new Stack();
        newStack.push(1);
        newStack.push(2);
        newStack.pop();
        newStack.pop();
        expect(newStack.top).toBeNull();
       
    })
    it('Can successfully peek the next item on the stack', () => {
        let newStack = new Stack();
        newStack.push(1);
        newStack.push(2);
        newStack.push(3);
        newStack.peek();
        expect(newStack.top.value).toEqual(3);
       
    })
    it('Can successfully instantiate an empty stack', () => {
        let newStack = new Stack();
    
        expect(newStack.top).toBeNull();
       
    })
    it('Calling pop or peek on empty stack raises exception', () => {
        let newStack = new Stack();
       
        expect((newStack.isEmpty())).toEqual(true);
    })


    
})