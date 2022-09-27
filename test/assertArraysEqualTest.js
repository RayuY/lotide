
const assert = require('chai').assert;
const assertArraysEqual = require("../assertArraysEqual");
// const eqArrays = require("../eqArrays");

describe("#assertArraysEqual", () => {
  it("returns true if true", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), true)
  });

  it("returns false if false", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 4]), false)
  });
});