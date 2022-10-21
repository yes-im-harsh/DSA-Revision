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
    const newNode = {
      value: value,
      next: null,
    };

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
}

const myLinkedList = new MyLinkedList(5);
console.log(myLinkedList);
console.log(myLinkedList.append(2));
