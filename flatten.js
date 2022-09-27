
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


// console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]

module.exports = flatten;