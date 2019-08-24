//eqArray.js
const eqArrays = function(arrActual, arrExpected) {
  if (arrActual.length !== arrExpected.length) return false;
  
  for (let i = 0; i < arrActual.length; i++)
    if (arrActual[i] !== arrExpected[i]) return false;
  
  return true;
};


const eqObjects = function(object1, object2) {
  
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;
  if (typeof object1 !== 'object' || typeof object2 !== 'object') return false;

  for (let objectIndex in object1) { //loops through object1

    //if object1[objectIndex] is an array, compare using eqArray()
    if (Array.isArray(object1[objectIndex])) {
      if (!eqArrays(object1[objectIndex], object2[objectIndex])) return false;
      
    //if object1[objectIndex] is another object, compare using recursion
    } else if (typeof object1[objectIndex] === 'object') {
      if (!eqObjects(object1[objectIndex], object2[objectIndex])) return false;


    //if object1[objectIndex] is not an array, compare using ===
    } else if (object1[objectIndex] !== object2[objectIndex]) return false;
    

  }
  return true;
};

