const assert = require('chai').assert;

const eqArrays = require('../eqArrays');

const assertEqual = require('../assertEqual');

// Test code
eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

/*
(1) Modularize eqArrays
Great job on your eqArrays function! It's well-written and should work as expected. However, there are a few things you need to adjust to meet the requirements.

In your eqArrays.js file, you've included the assertEqual function and some test cases. According to the requirements, this file should only contain the eqArrays function, and it should be exported using module.exports. You can do this by adding the following line at the end of your file:

module.exports = eqArrays;
Then, you can remove the assertEqual function and the test cases from this file. These should be in your test/eqArraysTest.js file instead.

In your test/eqArraysTest.js file, you've done a good job importing the eqArrays and assertEqual functions using require. However, you have some test cases that are not using the assertEqual function. Remember, all your test cases should use assertEqual to compare the output of eqArrays to a boolean value. For example, instead of:

eqArrays([1, 2, 3], [1, 2, 3]) // => true
You should have:

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
Please make these changes and you'll be on the right track. Keep up the good work!
*/