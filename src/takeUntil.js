const takeUntil = function(arr, cb) {
  let returnArr = [];
  for (let value of arr) {
    if (!cb(value)) {
      returnArr.push(value);
    } else break;
  }
  
  return returnArr;
};