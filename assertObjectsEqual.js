const eqObjects = function(object1, object2) {
  let keysObj1 = Object.keys(object1)
  let keysObj2 = Object.keys(object2)

  if (keysObj1.length != keysObj2.length) {
    return false;
  }


  let count = 0;
  for (let i of keysObj1) {
    for (let j of keysObj2) {
      if (Array.isArray(object1[j]) && Array.isArray(object2[i])) {
        if ((object1[i].length === object2[i].length) && (object1[i].every((value, index) => value === object2[i][index]))) {
          count ++;
        } else {
          return false;
        } 
      } else if (object1[j] === object2[i]) {
        count ++;
      }
      }
  }

  if (count === keysObj1.length) {
    return true;
  }
};


// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};


// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertObjectsEqual(eqObjects(ab, ba), true); 
// const abc = { a: "1", b: "2", c: "3" };
// assertObjectsEqual(eqObjects(ab, abc), false); 

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertObjectsEqual(eqObjects(cd, dc), true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertObjectsEqual(eqObjects(cd, cd2), false); // => false