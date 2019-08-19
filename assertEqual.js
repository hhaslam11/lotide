const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('🛑 Assertion passed - ' + actual + ' = ' + expected);
  } else {
    console.log('✅ Assertion failed - ' + actual + ' != ' + expected);
  }
};

//Tests
assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1, 1);
assertEqual('Hello World', 'Hello World');
assertEqual(1, 10);
assertEqual('25', 25);