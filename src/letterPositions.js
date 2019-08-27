const letterPositions = function(sentence) {
  if (!sentence && sentence !== '') return undefined;

  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ') continue; //skip spaces

    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  return results;
};

module.exports = letterPositions;