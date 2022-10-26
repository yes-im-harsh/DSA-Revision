class Node {
  constructor(value) {
    (this.value = value), (this.next = null), (this.prev = null);
  }
}
class MyDoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);

    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

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
    let follower = leader.next;

    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;

    // console.log(this);
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
      let leader = this.traverseToIndex(index - 1);
      let unwantedNode = leader.next;
      let follower = unwantedNode.next;
      leader.next = follower;
      follower.prev = leader;

      this.length--;
      // console.log(this)
      return this.printList();
    }
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }

    //   let first = this.head;
    //   this.tail = this.head;
    //   let second = first.next;

    //   while (second) {
    //     let temp = second.next;
    //     second.next = first;
    //     first = second;
    //     second = temp;
    //   }
    //   this.head.next = null;
    //   this.head = first;
    //   return this.printList();

    //Improved Solution  https://www.youtube.com/watch?v=S9kMVEUg-x4
    let prev = null;
    let curr = this.head;

    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    this.head = prev;
    return this.printList();
  }
}

const myDoublyLinkedList = new MyDoublyLinkedList(5);
console.log(myDoublyLinkedList.append(5));
console.log(myDoublyLinkedList.append(16));
console.log(myDoublyLinkedList.prepend(1));
console.log(myDoublyLinkedList.insert(1, 99));
console.log(myDoublyLinkedList.insert(20, 88));
console.log(myDoublyLinkedList.remove(1));
console.log(myDoublyLinkedList.reverse());
