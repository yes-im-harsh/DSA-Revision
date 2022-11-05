//Implement a function that reverses a string using iteration...and then recursion!
function reverseStringRecursion(str) {
  if (str === "") return "";

  return reverseStringRecursion(str.substr(1)) + str.charAt(0);
}

function reverseString(str) {
  let arrayStr = str.split("");
  let reversedArray = [];

  function addToArray(array) {
    if (array.length > 0) {
      reversedArray.push(arrayStr.pop());
      return addToArray(array);
    }

    return;
  }

  addToArray(arrayStr);
  reversedArray.join("");
}

reverseString("yoyo mastery");

reverseStringRecursion("yoyo mastery");
//should return: 'yretsam oyoy'
