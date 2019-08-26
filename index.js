const assertArraysEqual = require('./src/assertArraysEqual');
const assertEqual = require('./src/assertEqual');
const assertObjectEqual = require('./src/assertObjectEqual');
const countLetters = require('./src/countLetters');
const countOnly = require('./src/countOnly');
const eqArrays = require('./src/eqArrays');
const eqObjects = require('./src/eqObjects');
const findKey = require('./src/findKey');
const findKeyByValue = require('./src/findKeyByValue');
const flatten = require('./src/flatten');
const head = require('./src/head');
const letterPositions = require('./src/letterPositions');
const map = require('./src/map');
const middle = require('./src/middle');
const tail = require('./src/tail');
const takeUntil = require('./src/takeUntil');
const without = require('./src/without');

module.exports = {
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  assertObjectEqual: assertObjectEqual,
  countLetters: countLetters,
  countOnly: countOnly,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  flatten: flatten,
  head: head,
  letterPositions: letterPositions,
  map: map,
  middle: middle,
  tail: tail,
  takeUntil: takeUntil,
  without: without
};