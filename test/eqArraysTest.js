
const assert  = require('chai').assert;
const eqArrays = require("../eqArrays");

describe("#eqArrays", () => {
  it("returns true if arrays are equal", () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true)
  });

  it("returns false if arrays are different", () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false)
  });
});

// eqArrays([1, 2, 3], [1, 2, 3]), true;   // => should PASS
// eqArrays([1, 2, 3], [1, 2, 3]), true // => true
// eqArrays([1, 2, 3], [3, 2, 1]), false // => false
// eqArrays(["1", "2", "3"], ["1", "2", "3"]), true // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]), false // => false