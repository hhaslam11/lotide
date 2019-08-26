const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(objectActual, objectExpected) {
  const inspect = require('util').inspect;
  console.log(eqObjects(objectActual, objectExpected) ? `✅ Assertion passed -  ${inspect(objectActual)} = ${inspect(objectExpected)}` : `🛑 Assertion failed - ${inspect(objectActual)} != ${inspect(objectExpected)}`);
};