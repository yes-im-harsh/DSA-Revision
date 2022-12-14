function mergeSortedArrays(arr1, arr2) {
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;

  let arr1Item = arr1[0];
  let arr2Item = arr2[0];

  const mergedArray = [];

  let i = 1;
  let j = 1;

  while (arr1Item || arr2Item) {
    if (!arr2Item || arr1Item < arr2Item) {
      mergedArray.push(arr1Item);
      arr1Item = arr1[i];
      i++;
    } else {
      mergedArray.push(arr2Item);
      arr2Item = arr2[j];
      j++;
    }
  }

  return mergedArray;
}

mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
//[0, 3, 4, 4, 6, 30, 31]

//Above will through an error if first item is zero in both the array. Solve it

//Improved:)

function mergeSortedArray(array1, array2) {
  if (!array1.length && !array2.length) return [];

  if (!array1.length) return array2;
  if (!array2.length) return array1;

  const mergedArray = [];

  let i = 0;
  let j = 0;

  const totalArrayLength = array1.length + array2.length;

  while (i + j < totalArrayLength) {
    if (array2[j] === undefined || array1[i] < array2[j]) {
      mergedArray.push(array1[i]);
      i++;
    } else if (array1[i] === undefined || array2[j] < array1[i]) {
      mergedArray.push(array2[j]);
      j++;
    } else if (array1[i] === array2[j]) {
      mergedArray.push(array1[i]);
      mergedArray.push(array2[j]);
      i++;
      j++;
    }
  }

  return mergedArray;
}

mergeSortedArray([0, 2, 4, 6], [0, 1, 3, 5, 7]);

//Attempt
// function mergeSortedArrays(arr1, arr2) {
//   if (arr1.length === 0) {
//     arr2;
//   } else if (arr1.length === 0) {
//     arr2;
//   }

//   const newArray = [];

//   // for (let i = 0; i <= arr1.length - 1; i++) {
//   //   for (let j = 0; j <= arr2.length - 1; j++) {
//   //     if (arr1[j] < arr1[i]) {
//   //       newArray.push(arr2[j]);
//   //     }
//   //   }
//   //   newArray.push(arr1[i]);
//   // }

//   // return newArray;

//   let i = 0;
//   let j = 0;
//   while (i < arr1.length - 1) {
//     if (arr2[i] < arr1[j]) {
//       newArray.push(arr2[i]);
//       j++;
//     }
//     newArray.push(arr1[i]);
//   }
// }
