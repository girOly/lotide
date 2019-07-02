const findKey = function(object, callback) {
  let foundKey = [];
  for (key in object) {
    // console.log(key);
    // console.log(object[key]);
    if (callback(object[key])) {
      foundKey = [key];
      return foundKey;
    }
  }
};

console.log(
  findKey(
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 }
    },
    x => x.stars === 2
  )
); // => "noma"

module.exports = findKey;
