const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  let count = {};
  let noSpace = str.split(" ").join("");

  for (let i of noSpace) {
    if (count[i]) {
      count[i] += 1;
    } else {
      count[i] = 1;
    }
  }

  return count;
}




console.log(countLetters("lighthouse in the house"));