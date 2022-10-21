//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

function firstRecurringCharacter(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        console.log(i);
      }
    }
  }
}

firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]);

function firstRecurringCharacter2(array) {
  let map = {}; //Space Complexity O(n)

  for (let i = 0; i < array.length; i++) {
    if (map[array[i]] !== undefined) {
      return array[i];
    } else {
      map[array[i]] = i;
    }
  }

  return undefined;
}

firstRecurringCharacter2([2, 5, 1, 2, 3, 5, 1, 2, 4]);

//First Recurring character
function firstRecurringCharacter(str) {
  let set = new Set(); //Space complexity O(n)

  for (let i = 0; i < str.length; i++) {
    let c = str[i];

    if (set.has(c)) return c;

    set.add(c);
  }

  return undefined;
}

firstRecurringCharacter("harshchauhan"); //Time complexity O(n), Space Complexity O(n)

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

function firstRecurringBonus(arr) {
  let set = new Set();

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];

    if (set.has(item)) return item;

    set.add(item);
  }
}

firstRecurringBonus([2, 5, 5, 2, 3, 5, 1, 2, 4]);
