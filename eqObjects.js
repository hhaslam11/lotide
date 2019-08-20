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


//tests
const a = {
  a: "1",
  b: "1.5",
  c: [1, 2, 3]
};

const b = {
  a: "1",
  b: "2",
  c: "3"
};

const c = {
  a: "1",
  b: "1.5",
  c: [1, 2, 3]
};

console.log(eqObjects(a, b)); //false
console.log(eqObjects(a, c)); //true