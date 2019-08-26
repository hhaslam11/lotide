# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @hhaslam11/lotide`

**Require it:**

`const _ = require('@hhaslam11/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual(actual, expected)`: Gives visual assertion
* `assertEqualArray(actual, expected)`: Gives visual assertion on arrays
* `assetObjectsEqual(actual, expected)`: Gives visual assertion on objects
* `countLetters(string)`: returns an object with the amount of times each letter occurs
* `countOnly(object, thingToCount)`: counts how many times 'thingToCount' appears in object/array
* `eqArray(array1, array2)`: compares two arrays and returns true or false if theyre equal or not
* `eqObjects(object1, object2)`: compares two objects and returns true or false if theyre equal or not
* `findKey(object, function(key))`: Loops through object and returns the key if callback function returns true 
* `findKeyByValue(object, value)`: Searches an array and returns the key of a specific value
* `flatten(array)`: Takes an array of other arrays (or single values) and returns a flattened version, without nested arrays
* `head(array)`: returns the first value of an array
* `letterPositions(string)`: returns an object with all the indexes that each letter appears in
* `map(array, function)`: clone of array.map()
* `middle(array)`: returns the middle value(s) of an array
* `tail(array)`: returns an array without its head
* `takeUntil(array, function)`: returns a "slice of the array with elements taken from the beginning." It will keep going until the callback/predicate returns a truthy value
* `without(array, valueToRemove)`: returns array without valueToRemove
