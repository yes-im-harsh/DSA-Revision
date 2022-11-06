const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  //   let q = 0,
  //     b = 1;
  //   let currentPointer = number[a];
  //   let nextPointer = number[b];
  //   let bubbleSortedArray = [];
  //   while ((a = array.length())) {
  //     if (currentPointer > nextPointer) {
  //       let temp = currentPointer;
  //       currentPointer = nextPointer;
  //       nextPointer = temp;
  //       a++;
  //       b++;
  //     }
  //   }

  const length = array.length;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
}

bubbleSort(numbers);
console.log(numbers);
