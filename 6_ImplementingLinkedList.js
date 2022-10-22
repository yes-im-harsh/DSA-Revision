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

  insert(index, value) {
    if (index < 0) {
      console.log("can't insert at negative index!");
      return;
    }

    if (index >= this.length) {
      this.append(value);
      return this.printList();
    }

    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }

    const newNode = new Node(value);

    let leader = this.traverseToIndex(index - 1);
    let holdingPointer = leader.next;

    // (Leader) * -- * (holding pointer)
    //           \  /
    //            * (New Node)

    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;

    return this.printList();
  }

  traverseToIndex(index) {
    let count = 0;
    let currentNode = this.head;
    while (count !== index) {
      currentNode = currentNode.next;
      count++;
    }

    return currentNode;
  }

  remove(index) {
    if (index >= this.length) {
      console.log(
        "Index exceeds the length of the Linked List,It Can't be deleted."
      );
    } else if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return this.printList;
    } else {
      //My Approach
      // let leader = this.traverseToIndex(index - 1);
      // let unwantedNode = leader.next;
      // let toBePointedNode = unwantedNode.next;
      // leader.next = toBePointedNode;

      let leader = this.traverseToIndex(index - 1);
      let unwantedNode = leader.next;
      leader.next = unwantedNode.next;

      this.length--;
      return this.printList();
    }
  }
}

const myLinkedList = new MyLinkedList(5);
console.log(myLinkedList.append(5));
console.log(myLinkedList.append(16));
console.log(myLinkedList.prepend(1));
console.log(myLinkedList.insert(2, 99));
console.log(myLinkedList.insert(20, 88));
console.log(myLinkedList.remove(2));
