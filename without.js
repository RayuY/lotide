
const without = function (sourceArr, removeArr) {

  sourceArr = sourceArr.filter(val => removeArr.indexOf(val) === -1)
  return sourceArr;
};

// const words = ["hello", "world", "lighthouse"];

// console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case

// console.log(without([1, 2, 3], [1])) // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;