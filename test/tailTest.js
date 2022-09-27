const { assert } = require('chai');
const tail = require('../tail');
const result = ["Hello", "Lighthouse", "Labs"];

describe("#tail", () => {
  it("returns a new array without the first element of original array", () => {
    assert.deepEqual(tail(result).length, 2)
  });
})

// no need to capture the return value since we are not checking it
// assertEqual(tail(result).length, 2); // ensure we get back two elements

// assertEqual(tail(result)[0], "Lighthouse"); // ensure first element is "Lighthouse"


// assertEqual(tail(result)[1], "Labs"); // ensure second element is "Labs"