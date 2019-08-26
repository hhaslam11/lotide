const findKeyByValue = function(objectToSearch, value) {
  for (let key in objectToSearch) {
    if (objectToSearch[key] === value) return key;
  }
  return undefined;
};

module.exports = findKeyByValue;