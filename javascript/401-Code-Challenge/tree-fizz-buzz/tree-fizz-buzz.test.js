'use strict';

const {BinaryTree } = require('../trees/binaryTree');
const Node = require('../trees/node');
const fizzB0uzzTree = require('./tree-fizz-buzz');
let tree = null;

describe('k-ary tree', ()=>{

    beforeAll(()=> {
        let ten = new Node(10);

        let five = new Node(5);
        let six = new Node(6);
        let eight = new Node(8);
        let four = new Node(4);
        
        ten.left = eight;
        ten.left = four;
        ten.right = five;
        five.left = six;


        tree = new BinaryTree(ten);
    });


    it('Can successfully find maximum value in the tree', ()=>{
        let output=  [
        'Buzz',
        '4',
        'Buzz',
        'Fizz'
      ]

        let expected = fizzB0uzzTree(tree);
        expect(expected).toEqual(output);
    });




});