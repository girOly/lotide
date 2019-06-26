const letterPositions = function(sentence) {
  const objectLetters = {};
  for (var i = 0; i < sentence.length; i++) {
    if (objectLetters[sentence[i]]) {
      objectLetters[sentence[i]].push(i);
    } else {
      objectLetters[sentence[i]] = [i];
    }
  }
  return objectLetters;
};

console.log(letterPositions("Hello"));
