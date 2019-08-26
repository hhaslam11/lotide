const eqArrays = function(arrActual, arrExpected) {
  let isEqual = true;
  if (arrActual.length !== arrExpected.length) isEqual = false;
  
  for (let i = 0; i < arrActual.length; i++)
    if (arrActual[i] !== arrExpected[i]) isEqual = false;
  
  console.log(isEqual ? `✅ Assertion passed -  ${arrActual} = ${arrExpected}` : `🛑 Assertion failed - ${arrActual} != ${arrExpected}`);
};

module.exports = eqArrays;