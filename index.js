// index.js
const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
//const flatten = require('./flatten');
const letterPositions = require('./letterPositions');
const takeUntil = require('./takeUntil');
const without = require('./without');




module.exports = {
  head, tail, middle, assertArraysEqual, assertEqual, assertObjectsEqual, countLetters, countOnly, eqArrays, eqObjects, findKey, findKeyByValue, /*flatten,*/ letterPositions, takeUntil, without 
};

/*
(1) Implement object shorthand
Great job on your code! You've correctly used the ES6 property value shorthand in your module.exports object. This is exactly what the requirements were asking for.

One thing I noticed is that you've commented out the flatten function. If this function is part of your project, you should uncomment it so it can be exported with the rest of your functions. If it's not part of your project, you can remove the commented out code to keep your file clean and easy to read.
*/