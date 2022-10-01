// // Implementing Array In JavaScript

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    console.log(this.data);
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }

  pop() {
    const lastItem = this.data[this.length - 1];

    // this will not work
    // delete lastItem;

    delete this.data[this.length - 1];
    this.length--;
    console.log(lastItem);
    return this.data;
  }

  deleteAtIndex(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index) {
    if (index > this.length - 1 || index < 0) {
      return false;
    }

    for (let i = index; i < this.length - 1; i++) {
      console.log(this.data[i], this.data[i + 1]);
      this.data[i] = this.data[i + 1];
    }

    delete this.data[index];
    this.length--;
  }
}

const myArray = new MyArray();
myArray.push("hi");
myArray.push("you");
myArray.push("!");
myArray.pop();
myArray.deleteAtIndex(0);
myArray.push("are");
myArray.push("nice");
myArray.shiftItems(0);
console.log(myArray);
