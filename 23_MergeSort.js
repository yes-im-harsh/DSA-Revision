const array = [8, 20, -2, 4, -6, 0];

// function mergeSort1(arr) {
//   if (arr.length === 1) {
//     return arr;
//   }

//   // Split Array in into right and left
//   const length = arr.length;
//   const mid = Math.floor(length / 2);
//   const leftArray = arr.slice(0, mid);
//   const rightArray = arr.slice(mid);
//   // console.log('left:', leftArray);
//   // console.log('right:', rightArray);

//   return merge(mergeSort1(leftArray), mergeSort1(rightArray));
// }

// function merge(left, right) {
//   const result = [];
//   let leftIndex = 0;
//   let rightIndex = 0;

//   while (leftIndex < left.length && rightIndex < right.length) {
//     if (left[leftIndex] < right[rightIndex]) {
//       result.push(left[leftIndex]);
//       leftIndex++;
//     } else {
//       result.push(right[rightIndex]);
//       rightIndex++;
//     }
//   }
//   // console.log(left, right)
//   return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
// }

// mergeSort1(array);
// console.log(mergeSort1(array));

function mergeSort2(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let length = arr.length;
  let mid = Math.floor(length / 2);
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid);

  console.log("Left Array: ", leftArr)
  console.log("Right Array: ", rightArr)

  return merge(mergeSort2(leftArr), mergeSort2(rightArr));
}

function merge(leftArr, rightArr) {
  let sortedArray = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArray.push(leftArr.shift());
    } else {
      sortedArray.push(rightArr.shift());
    }
  }
  return [...sortedArray, ...leftArr, ...rightArr];
}

mergeSort2(array);
console.log(mergeSort2(array));
