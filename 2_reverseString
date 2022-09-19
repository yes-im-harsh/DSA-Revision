const introduce = "My name is Harsh Chauhan";

function reverseString(str) {
  //Check Input
  if (!str || str.length < 2 || typeof str !== "string") {
    return "Hmm, That is not good. :(";
  }

  const backwards = [];
  const lastItem = str.length - 1;

  for (let i = lastItem; i >= 0; i--) {
    backwards.push(str[i]);
  }
  console.log(backwards);

  return backwards.join("");
}

function reverse2(str) {
  return str.split("").reverse().join();
}

const reverse3 = (str) => [...str].reverse().join("");

reverseString("My name is Harsh Chauhan");
reverse2("My name is Harsh");
reverse3("My name is Harsh");
