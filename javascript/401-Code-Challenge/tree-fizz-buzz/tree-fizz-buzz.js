'use strict';
const {BinaryTree } = require('../trees/binaryTree');
const Node = require('../trees/node');

  const fizzB0uzzTree = (tree)=>{

      if (!tree.root)
      return 'there is no tree';
      
      let currentNode = tree.root;
      let newTree = [];

      const traverse = (node)=>{

          if(node.value %3 == 0){
            newTree.push(node.value = 'Fizz');

          }else if (node.value % 5 == 0 ){
              newTree.push(node.value = 'Buzz');


          }else if (node.value %3 == 0 && node.value % 5 == 0 ){
              newTree.push(node.value = 'FizzBuzz');

          }else{
              newTree.push(`${node.value}`)
          }
          
          if (node.left) 
          traverse(node.left)

          if (node.right) 
          traverse(node.right)
        
      }
traverse(currentNode);
return newTree;




  }




let tree = null;


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

console.log('fizzzBuzz:', fizzB0uzzTree(tree));


  module.exports=fizzB0uzzTree;