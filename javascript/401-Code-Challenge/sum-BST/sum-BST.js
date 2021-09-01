'use strict';


const {BinaryTree} = require('../trees/binaryTree');
const Node = require('../trees/node');

const sumOddNum = (tree)=>{

    if (!tree.root)
    return 'there is no tree';
    
    let currentNode = tree.root;
    let sum = 0;

    const traverse = (node)=>{

        if(node.value %2 == 1){
            sum = sum +node.value;
        }
        
        if (node.left) 
        traverse(node.left)

        if (node.right) 
        traverse(node.right)
      
    }
traverse(currentNode);
return sum;

}


let tree = null;


let eight = new Node(8);
let three = new Node(3);
let one = new Node(1);
let six = new Node(6);
let four = new Node(4);
let seven = new Node(7);
let ten = new Node(10);
let fourteen = new Node(14);
let therteen = new Node(13);


eight.left= three;
eight.right = ten;
three.left = one;
three.right= six;
six.left= four;
six.right = seven;
ten.right=fourteen;
fourteen.left=therteen;

tree = new BinaryTree(eight);

console.log('sum',sumOddNum(tree));

module.exports = sumOddNum;