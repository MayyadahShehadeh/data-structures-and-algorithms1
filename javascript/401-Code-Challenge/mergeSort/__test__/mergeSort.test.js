'use strict';

const mergeSort = require('../mergeSort');

describe('merge sort', () => {

  it('return sorted array', () => {
    let input = [8,4,23,42,16,15];
    let output= mergeSort(input)
    expect(output).toEqual([4,8,15,16,23,42]);
  });

});