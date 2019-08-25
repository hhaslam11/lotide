const assert = require('chai').assert;
const head = require('../src/head');


describe('head()', () => {
  it('should return the first value of an array', () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it('should return \'5\' when passed [\'5\']', () => {
    assert.strictEqual(head(['5']), '5');
  });
  it('should return undefined when passed an empty array', () => {
    assert.isUndefined(head([]));
  });
});

/*

it('', () => {
    
  });
*/