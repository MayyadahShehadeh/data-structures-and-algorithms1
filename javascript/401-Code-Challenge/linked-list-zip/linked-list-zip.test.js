'use strict';


const LinkedList = require('../linked-list/linked-list');
const linkedListZip = require('./linked-list-zip');

describe("LinkedList", () => {

    it('can successfully zip the two linked lists together into one', () => {

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

      expect(linkedListZip(list1,list2).toString()).toEqual('{1}->{2}->{3}->{4}->{5}->{6}->{7}->{9}->null');
    });

})