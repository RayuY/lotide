const eqArrays = require("./eqArrays");


const assertArraysEqual = function (arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo) === true) {
    console.log("The two arrays are equal.")
  } else {
    console.log("The two arrays are different.")
  } 
};



module.exports = assertArraysEqual


