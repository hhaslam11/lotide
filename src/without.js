const without = function(source, valuesToRemove) {
  let filteredArray = [];
  let matchingValues;

  for (let sourceIndex in source) {
    matchingValues = false;
    
    for (let valuesToRemoveIndex in valuesToRemove) {
      if (source[sourceIndex] === valuesToRemove[valuesToRemoveIndex])
        matchingValues = true;
    }
    if (!matchingValues) filteredArray.push(source[sourceIndex]);
  }
  return filteredArray;
};

module.exports = without;