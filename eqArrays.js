const eqArrays = function(arrActual, arrExpected) {
  if (arrActual.length !== arrExpected.length) return false;
  
  for (let i = 0; i < arrActual.length; i++) {
    
    //if arrActual[i] is another array, compare with recursion
    if (Array.isArray(arrActual[i])) {
      if (!eqArrays(arrActual[i], arrExpected[i])) return false;

    //else, compare using ===
    } else if (arrActual[i] !== arrExpected[i]) return false;
  }
  
  return true;
};