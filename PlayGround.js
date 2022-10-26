// let obj1 = { a: true };
// let obj2 = obj1;

// // obj1.a=false;

// console.log("1", obj1);
// console.log("2", obj2);

//Stack

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    }

    const holdingPointer = this.top;
    this.top = newNode;
    newNode.next = holdingPointer;

    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) {
      return null;
    }

    if (this.top === this.bottom) {
      this.bottom = null;
    }

    this.top = this.top.next;
    this.length--;
    return this;
  }
}

// const myStack = new Stack();
// console.log(myStack.push(5));
// console.log(myStack.push(10));
// console.log(myStack.push(15));
// console.log(myStack.peek());
// console.log(myStack.pop());

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    }

    const holdingPointer = this.last;
    holdingPointer.next = newNode;
    this.last = newNode;

    this.length++;
    return this;
  }

  dequeue() {
    if (this.first === this.last) return (this.first = null);

    this.first = this.first.next;

    this.length--;
    return this;
  }
}

const myQueue = new Queue();
console.log(myQueue.enqueue("Joy"));
console.log(myQueue.enqueue("matt"));
console.log(myQueue.enqueue("Pavel"));
console.log(myQueue.enqueue("Samir"));
console.log(myQueue.peek());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
