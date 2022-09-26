
// slice of the array with elements taken from the beginning until the callback/predicate returns a truthy value.

const takeUntil = function (array, callback) {
  
  let results = [];
  for (let item of array) {
    if (!callback(item)) {
      results.push(item);
    } else if (callback(item)) {
      break;
    }
  }
  return results
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
[ 1, 2, 5, 7, 2 ]

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
[ 'I\'ve', 'been', 'to', 'Hollywood' ]



// ---------- test below 


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

assertArraysEqual(eqArrays(results1, [ 1, 2, 5, 7, 2 ]));
assertArraysEqual(eqArrays(results2, [ "I've", 'been', 'to', 'Hollywood' ]));