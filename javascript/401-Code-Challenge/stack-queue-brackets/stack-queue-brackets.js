'use strict';

const Stack = require('../stack-and-queue/stack');

const stackBrackets=(str)=>{

const newStack = new Stack();

for (let i=0; i<str.length ; i++){

if (str[i] == "[" || str[i] == "{" || str[i] == "("){
newStack.push(str[i]);


}else if (
    newStack.peek() == "[" && str[i] == "]" || newStack.peek() == "{" && str[i] == "}" ||
    newStack.peek() == "(" && str[i] == ")")
    {
        newStack.pop();
    }

    
}

if (newStack.isEmpty()){

    console.log('it is balanced');;
    return true;
}else{
    console.log('it is not balanced');
    return false;

}


}




let brackets1 = '{}(){}';
let brackets2 = '(){}[[]]';
let brackets3 = '(](';
let brackets4 = '{(})';


console.log(stackBrackets(brackets1));
console.log(stackBrackets(brackets2));
console.log(stackBrackets(brackets3));
console.log(stackBrackets(brackets4));

module.exports=stackBrackets;