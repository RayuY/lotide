
const countLetters = function(str) {
  let count = {};
  let noSpace = str.split(" ").join("");

  for (let i of noSpace) {
    if (count[i]) {
      count[i] += 1;
    } else {
      count[i] = 1;
    }
  }

  return count;
}

module.exports = countLetters;
