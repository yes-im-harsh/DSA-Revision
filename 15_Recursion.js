let counter = 0;

function loopBack() {
  console.log(counter);

  if (counter > 3) {
    return "Done!";
  }

  counter++;
  loopBack();
}

//For recursion you usually have
//1. Return for the base case.
//2. Return for the recursion function

let counter = 0;

(function loopBack() {
  console.log(counter);

  if (counter > 3) {
    return "Done!";
  }

  counter++;
  return loopBack();
})();
