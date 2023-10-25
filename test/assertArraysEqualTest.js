const assertArraysEqual = require('../assertArraysEqual');



assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);

/*
(1) Modularize assertArraysEqual
Keep going! Your submission seems like it might be missing something. Take a look at:

In your assertArraysEqual.js file, you've defined the eqArrays function within the same file. However, the requirement is to import this function from a separate file using require syntax. You should have something like this at the top of your file:

const eqArrays = require('./eqArrays');
Also, you need to export the assertArraysEqual function at the end of your assertArraysEqual.js file. This is done using module.exports:

module.exports = assertArraysEqual;
In your test/assertArraysEqualTest.js file, you've done a good job importing the assertArraysEqual function and using it in your test cases. However, make sure that the assertArraysEqual function is correctly exported from the assertArraysEqual.js file, otherwise the require statement in your test file won't work as expected.
*/