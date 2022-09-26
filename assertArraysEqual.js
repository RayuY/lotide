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


assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);