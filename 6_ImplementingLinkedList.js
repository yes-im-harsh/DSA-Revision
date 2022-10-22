// 10-->5-->6

// const myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 6,
//         next: {
//           value: null,
//         },
//       },
//     },
//   },
// };

//Created new class "Node", because newNode code was repeating. DRY
class Node {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}
class MyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null, //Since constructor is going to run in starting.
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);

    // const newNode = {
    //   value: value,
    //   next: null,
    // };

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);

    // const newNode = {
    //   value: value,
    //   next: null,
    // };

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  //Print list method for better visualization.
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  
}

const myLinkedList = new MyLinkedList(5);
console.log(myLinkedList);
console.log(myLinkedList.append(2));
console.log(myLinkedList.prepend(3));
console.log(myLinkedList.printList());
