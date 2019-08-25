const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(objectActual, objectExpected) {
  const inspect = require('util').inspect;
  console.log(eqObjects(objectActual, objectExpected) ? `✅ Assertion passed -  ${inspect(objectActual)} = ${inspect(objectExpected)}` : `🛑 Assertion failed - ${inspect(objectActual)} != ${inspect(objectExpected)}`);
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

assertObjectsEqual(a, b); //false
assertObjectsEqual(a, c); //true