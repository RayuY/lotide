
const findKeyByValue = function(obj, str) {
  let match = '';
  let arr = Object.keys(obj);

  for (let i of arr) {
    if ( obj[i] === str) {
      match += i;
      break;
    }
  }
  if (match) {
    return match;
  }
  return undefined;
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;