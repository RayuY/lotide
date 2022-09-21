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

const middle = function (arr) {
  let newArr = [];

  if (arr.length <= 2) {
    return newArr;

  } else if (arr.length % 2 === 0) {
    newArr.push(arr[arr.length / 2 - 1])
    newArr.push(arr[arr.length / 2])
    
  } else if (arr.length % 2 === 1) {
    newArr.push(arr[Math.floor(arr.length / 2)])
  }
  return newArr;
}
// testtest
// console.log(middle([1])) // => []
// console.log(middle([1, 2])) // => []
// console.log(middle([1, 2, 3])) // => [2]
// console.log(middle([1, 2, 3, 4, 5])) // => [3]
// console.log(middle([1, 2, 3, 4])) // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]