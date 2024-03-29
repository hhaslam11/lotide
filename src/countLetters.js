const countLetters = function(inputString) {
  if (!inputString) return undefined;
  
  const results = {};
  for (let letter of inputString) {
    if (letter === ' ') continue; //skip spaces

    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};

module.exports = countLetters;