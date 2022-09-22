const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

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

// primitive test
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); 
const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); 

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false