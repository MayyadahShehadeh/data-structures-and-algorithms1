'use strict';

const Node = require('../trees/node');

class BinaryTree {
    constructor(root=null) {
        this.root = root;
    }

    // root - left - right
    preOrder() {
        let result = [];
        let traverse = (node) => {
            result.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return result;
    }

    // left - root - right
    inOrder() {
        let result = [];
        let traverse = (node) => {
            if (node.left) traverse(node.left);
            result.push(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return result;
    }

    // left  - right - root
    postOrder() {
        let result = [];
        let traverse = (node) => {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            result.push(node.value);
        }
        traverse(this.root);
        return result;
    }


    findMaximumValue() {
        let newArr = this.preOrder();
        let maxVal = 0;
        if (!this.root) {
            console.log('the tree is empty');
        }
        for (let i = 0; i < newArr.length; i++) {
            if(newArr[i]> maxVal){
                maxVal = newArr[i];
            }  
        }
        return maxVal;

    }



}

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
two.left = six;
six.right = seven;
seven.left = eight;
seven.right = nine;
three.left = four;
three.right = five;

let tree = new BinaryTree(one);
tree.findMaximumValue();
console.log('treeee:', tree);
console.log('max valuuee',tree.findMaximumValue());



module.exports = BinaryTree;