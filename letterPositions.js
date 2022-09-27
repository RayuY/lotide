

const letterPositions = function(str) {
  let count = {};

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      continue;
    }
    if (count[str[i]]) {
      count[str[i]].push(i)
    } else {
      count[str[i]] = [];
      count[str[i]].push(i)
    }
  }
  console.log(count);
  return count;
};


// assertArraysEqual(letterPositions('lighthouse in the house'), [9, 16, 22]);

module.exports = letterPositions;