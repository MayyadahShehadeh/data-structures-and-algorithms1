'use strict';

const quickSort = require('../quickSort');

describe('quick sort', () => {

  it('return sorted array', () => {
    let input = [8,4,23,42,16,15];
    let output= quickSort(input, 0 , input.length-1)
    expect(output).toEqual([4,8,15,16,23,42]);
  });

});