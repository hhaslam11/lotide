const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion passed -  ${actual} = ${expected}`);
  } else {
    console.log(`🛑 Assertion failed - ${actual} != ${expected}`);
  }
};
const eqArrays = function(arrActual, arrExpected) {
  if (arrActual.length !== arrExpected.length) return false;
  
  for (let i = 0; i < arrActual.length; i++)
    if (arrActual[i] !== arrExpected[i]) return false;
  
  return true;
};
