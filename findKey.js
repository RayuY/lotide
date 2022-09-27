
const findKey = function (objs, callback) {

  for (let key in objs) {
    if (callback(objs[key])) {
      return key;
    }
  }
  return "no key found";
}

// assertEqual(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2), "noma") // => "noma"

// assertEqual(findKey({
//   "John": { adult: false},
//   "Todd": { adult: false},
//   "Annie": { adult: true},
//   "Sally": { adult: false}
// }, x => x.adult === true), "Annie");

module.exports = findKey;