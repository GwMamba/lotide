// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  assertObjectsEqual: assertObjectsEqual,
  countLetters: countLetters,
  countOnly: countOnly,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  flatten: flatten,
  letterPositions: letterPositions,
  takeUntil: takeUntil,
  without: without 
};

// Example 1
// Can export a number (not common, but JS won't stop me!)
module.exports = 5;

// Example 2
// Can export an object (quite common!)
module.exports = { 
  firstName: "Lighthouse",
  lastName:  "Labs"
}

// Example 3
// Can export a function (we did this for all our functions)
module.exports = function() {
  return "developers, developers, developers!"; 
}

// Etc.