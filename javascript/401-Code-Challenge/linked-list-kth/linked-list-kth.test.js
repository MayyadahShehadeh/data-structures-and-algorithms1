'use strict';
const LinkedList = require('./linked-list-kth');

describe('LinkedList', () => {

    it('Where k is greater than the length of the linked list', () => {
        let newNode = new LinkedList();
        newNode.addHead(1);
        newNode.append(2);
        newNode.append(4);
        newNode.addHead(3);
        expect(newNode.kthFromEnd(6)).toEqual('error');
      });

      it('Where k and the length of the list are the same', () => {
        let newNode = new LinkedList();
        newNode.addHead(1);
        newNode.append(2);
        newNode.append(4);
        newNode.addHead(3);
        expect(newNode.kthFromEnd(3)).toEqual(3);
      });
      it('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
        let newNode = new LinkedList();
        newNode.addHead(1);
        newNode.append(2);
        newNode.append(4);
        newNode.addHead(3);
        expect(newNode.kthFromEnd(1)).toEqual(2);
      });


})
