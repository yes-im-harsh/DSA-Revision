// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

class Stack {
  constructor() {
    this.array = [];
  }
  peek() {
    return this.array[this.array.length - 1];
  }
  push(value) {
    this.array.push(value);
    return this;
  }
  pop() {
    this.array.pop();
    return this;
  }
  isEmpty() {
    this.array.length === 0 ? true : false;
  }
}

const myStack = new Stack();
console.log(myStack.push("Google"));
console.log(myStack.push("Udemy"));
console.log(myStack.push("Discord"));
console.log(myStack.peek());
console.log(myStack.pop());
// console.log(myStack.pop());
// console.log(myStack.pop());

//Discord
//Udemy
//google
