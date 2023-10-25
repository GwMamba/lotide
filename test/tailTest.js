const assert = require('chai').assert;
const tail = function(arr) {
  return arr.slice(1);
};

// Function Implementation
const assertEqual = require('../assertEqual');

module.exports = tail;

// Test Case: Check the original array
//const words = ["Yo Yo", "Lighthouse", "Labs"];
//tail(words); // no need to capture the return value since we are not checking it
//assertEqual(words.length, 3); // original array should still have 3 elements!

// Test code
assertEqual(tail([5,6,7]), 5);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");

/*
(1) Modularize tail
Keep going! Your submission seems like it might be missing something. Take a look at:
                                          
In your tail.js file, you've correctly implemented the tail function and exported it using module.exports. However, the assertEqual function should not be required in this file. The purpose of this file is to define and export the tail function, not to test it. You can remove the following line:

const assertEqual = require('./assertEqual');
Also, the test cases should be removed from the tail.js file. They should be placed in the test/tailTest.js file instead. So, you can remove these lines:

// Test code
assertEqual(tail([5,6,7]), 5);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");
In your test/tailTest.js file, you've redefined the tail function. Instead, you should import it from the tail.js file using require. Replace the tail function definition with this line:

const tail = require('../tail');
Finally, your test cases in test/tailTest.js are not correct. The tail function returns an array, but you're comparing it to a single value. You should compare the first element of the returned array to the expected value. For example, instead of assertEqual(tail([5,6,7]), 5);, you should have assertEqual(tail([5,6,7])[0], 6);.
*/