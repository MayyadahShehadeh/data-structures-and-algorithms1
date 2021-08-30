'use strict';

const {BinaryTree} = require('../trees/binaryTree');
const breadthFirst = require('./tree-breadth-first');
const Node = require('../trees/node');

let tree = null;

describe('Binary Tree', ()=>{

    beforeAll(()=> {
        let one = new Node(1);
        let two = new Node(2);
        let three = new Node(3);
        let four = new Node(4);
        let five = new Node(5);
        let six = new Node(6);
        let seven = new Node(7);
        let eight = new Node(8);
        let nine = new Node(9);

        one.left = two;
        one.right = three;
        two.left = four;
        two.right = five;
        three.left = six;
        three.right = seven
        seven.left = nine
        five.left = eight

        tree = new BinaryTree(one);
    });


    it('Can successfully do breadth first search', ()=>{
        let output = [1,2,3,4,5,6,7,8,9];
        let expected = breadthFirst(tree);
        expect(expected).toEqual(output);

    });



});