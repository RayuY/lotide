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

const flatten = function (arr) {
  let newArr = [];
  for (let i of arr) {
    if (Array.isArray(i)) {
      for (j of i) {
        newArr.push(j)
      }
    } else {
      newArr.push(i);
    }
  }
  return newArr;
};


console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]