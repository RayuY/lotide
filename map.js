
const words = ["ground", "control", "to", "major", "tom"];
const foods = ["kimchi", "stinkytofu", "bleh"];
const cats = ["fat", "skinny", "buff"];

const map = function (array, callback) {

  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
const results2 = map(foods, word => word[0]) 
const results3 = map(cats, word => word[0])

//--------------- test code below

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


assertArraysEqual(eqArrays(results1, ['g','c','t','m','t']))
assertArraysEqual(eqArrays(results2, [ 'k', 's', 'b' ]))
assertArraysEqual(eqArrays(results3, [ 'f', 's', 'b' ]))