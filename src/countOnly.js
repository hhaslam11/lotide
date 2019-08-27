const countOnly = function(allItems, itemsToCount) {
  const results = {};
  
  for (let item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  if (Object.keys(results).length === 0) return undefined;
  return results;
};

module.exports = countOnly;