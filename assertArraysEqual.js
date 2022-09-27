const eqArrays = require("./eqArrays");

const assertArraysEqual = function (arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo) === true) {
    // console.log("The two arrays are equal.")
    return true;
  } else {
    // console.log("The two arrays are different.")
    return false;
  } 
};

module.exports = assertArraysEqual


