const place = ["Delhi", "Amsterdam", "Paris", "New York"];

console.log(place.sort());

const number = [1, 5, 65, 57, 2, 8];

console.log(number.sort());
//Returns [ 1, 2, 5, 57, 65, 8 ]
//Expected [1,2,5,8,57,65]

//.sort() converts the items to string and implement a .charCodeAt(0) then gives the number.

//Fixed

console.log(
  number.sort(function (a, b) {
    return a - b;
  })
);
