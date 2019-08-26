const flatten = function(arr) {
  if (!arr) return undefined;
  if (!Array.isArray(arr)) throw new Error('Input is not an array');

  let flatArr = [];
  for (let i in arr) {

    if (Array.isArray(arr[i])) {//if arr[i] is array

      //loop through inner array in arr[i], and push values to flatArr
      for (let innerArrayIndex in arr[i]) {
        flatArr.push(arr[i][innerArrayIndex]);
      }

    } else {
      flatArr.push(arr[i]);
    }

  }
  return flatArr;
};

module.exports = flatten;