const eqObjects = function(object1, object2) {
  for (let objectIndex in object1) { //loops through object1

    if (Object.keys(object1).length !== Object.keys(object2).length) return false;

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

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false

