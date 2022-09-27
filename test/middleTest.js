const assert = require('chai').assert;
const middle = require("../middle");

describe("#middle", () => {
  it("returns the middle element of an array", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns the middle element of an array", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });


})
// assertArraysEqual(middle([1]), []) // => []
// assertArraysEqual(middle([1, 2]), []) // => []
// assertArraysEqual(middle([1, 2, 3]), [2]) // => [2]
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]) // => [3]
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]) // => 
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]) // => 