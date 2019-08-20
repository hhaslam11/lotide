const eqObjects = function(object1, object2) {
  for (let objectIndex in object1) { //loops through object1

    //if object1 is an array, compare using eqArray()
    if (Array.isArray(object1[objectIndex])) {
      if (!eqArrays(object1[objectIndex], object2[objectIndex])) {
        return false;
      }

    //if object1 is not an array, compare using ===
    } else if (object1[objectIndex] !== object2[objectIndex]) {
      return false;
    }

  }
  return true;
};

//eqArray.js
const eqArrays = function(arrActual, arrExpected) {
  if (arrActual.length !== arrExpected.length) return false;
  
  for (let i = 0; i < arrActual.length; i++)
    if (arrActual[i] !== arrExpected[i]) return false;
  
  return true;
};

const assertObjectsEqual = function(objectActual, objectExpected) {
  console.log(eqObjects(objectActual, objectExpected) ? `✅ Assertion passed -  ${objectActual} = ${objectExpected}` : `🛑 Assertion failed - ${objectActual} != ${objectExpected}`);
};