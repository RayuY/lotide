const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe("#assertEqual", () => {
  it("logs pass message if match", () => {
    assert.strictEqual(assertEqual(1,1), `✅✅✅Assertion Passed: 1 === 1`)
  });

  it("logs failed if cases don't match", () => {
    assert.strictEqual(assertEqual(2, 31), `🛑🛑🛑Assertion Failed: 2 !== 31`)
  });
});
