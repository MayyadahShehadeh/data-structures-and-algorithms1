'use strict';


const Node = require('./node');

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
}


class binarySearchTree{
    
    constructor(){
        this.root=null;
        }
    


    add(value) {


        if (this.left) {
            if( value < this.root){
                this.left.add(value);

            }else if (value < this.root){
                this.left = new Node(value);

            }

        } else if(this.right) {
            if(value > this.root){
                this.right.add(value);

            }else if (value > this.root) {
                this.right = new Node(value);

        }

        }
      }


    
      contains(value) {
        if (this.root === value) {
          return this;
        }
    
        if (value < this.root && this.left) {
          return this.left.contains(value);
        } else if (value > this.root && this.right) {
          return this.right.contains(value);
        } else {
          return null;
        }
      }




    }







module.exports = {
    BinaryTree,
    binarySearchTree,


};