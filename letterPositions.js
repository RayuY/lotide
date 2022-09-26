const assertArraysEqual = function (eqArrays) {
  if (eqArrays === true) {
    console.log("The two arrays are equal.")
  } else {
    console.log("The two arrays are different.")
  } 
};

const eqArrays = function (arrOne, arrTwo) {
  if ((arrOne.length === arrTwo.length) && (arrOne.every((value, index) => value === arrTwo[index]))) {
    return true;
  } else {
    return false;
  } 
};

const letterPositions = function(str) {
  let count = {};

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      continue;
    }
    if (count[str[i]]) {
      count[str[i]].push(i)
    } else {
      count[str[i]] = [];
      count[str[i]].push(i)
    }
  }
  console.log(count);
  return count;
};


assertArraysEqual(letterPositions('lighthouse in the house'), [9, 16, 22]);