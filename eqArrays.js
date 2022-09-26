
const eqArrays = function (arrOne, arrTwo) {
  if ((arrOne.length === arrTwo.length) && (arrOne.every((value, index) => value === arrTwo[index]))) {
    return true;
  } else {
    return false;
  } 
};

module.exports = eqArrays;


