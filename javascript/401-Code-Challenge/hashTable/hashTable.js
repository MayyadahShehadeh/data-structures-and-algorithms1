'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    append(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            return;
        } 
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
    }
}

class Hashmap {
    constructor(size) {
        this.size = size;
        this.map = new Array(size);
    }

    hash(key) {
        // hashing algorithm
        return key.split('').reduce((acc, char)=> {
            console.log("char.charCodeAt(0) =====> ", char.charCodeAt(0))
            return acc + char.charCodeAt(0);
        }, 0) * 599 % this.size;
        // return the value of the hashed key
    }

    add(key, value) {
        // add key in hashmap to have this value
        // this.map[hash] = store data  -> if there's a linked list add to it.
        // [0,1,2,3,4,45,6.. .. size]
        let hash = this.hash(key); // number
        console.log("hash >>", hash)
        if (!this.map[hash]) {
            this.map[hash] = new LinkedList();
        }
        let entry = { [key] : value}  //-> {name: rawan}
        this.map[hash].append(entry);
    }


    get(key) {
        let hash = this.hash(key);
        let current= this.map[hash].head;

        while (current) {
            if (current.value[key]) {
              return current.value[key];

            }  else if (current.next === null) {
                return null;

              } else {
                current = current.next;
              }
        }
    }

    contain(key){

     let hash = this.hash(key);
   
    if (this.map[hash]) {
      return true;
    } 
      return false;
        
    }
}
function repeatedWord(string) {
    let hashmap = new Hashmap(1024);
    let inputString = string.split(',').join('').split(' ');
    console.log('log the input stringg ::', inputString);

    for (let i = 0; i < inputString.length; i++) {
    
      if (hashmap.contain(inputString[i])) {
        return inputString[i];
      }
        hashmap.add(inputString[i]);
    }
    return 'there is no repeated word';
  }

function isUnique(string){
    let hashmap = new Hashmap(1024);
if (!string) return'please input valid string';

    let str= string.split('') // to convert the string to characters array
    .filter(function(entry) { return entry.trim() != ''; }) // to remove space from characters array

    for (let i=0; i< str.length;i++){

if(hashmap.contain(str[i])){
    return false;
}
hashmap.add(str[i]);
}
return true
}

console.log(isUnique(''));
console.log(isUnique('The quick brown fox jumps over the lazy dog'));
console.log(isUnique('I love cats'));
console.log(isUnique('Donald the duck'));





// let hashmap = new Hashmap(1024);
// hashmap.add('name', 'Samah');
// hashmap.add('age', 23);
// hashmap.add('cat', 'Kitty');
// hashmap.add('act', 'Jonny Depp');

// console.log('getttt',(hashmap.get('name')));
// console.log('gettt22',(hashmap.get('cat')));
// console.log('gettt3333',(hashmap.get('act')));
// console.log('gettt4444',(hashmap.get('nulll')));

// console.log('contains:', (hashmap.contain('name')));

// console.log(hashmap)
// console.log(hashmap.map[951]);
// console.log(hashmap.map[75]);
// console.log(hashmap.map[520]);
// console.log(hashmap.map[520].head.next);

// console.log('reapeated word::', (repeatedWord('what do you do')));
module.exports = 
{
    Hashmap,
    repeatedWord,
    isUnique
}