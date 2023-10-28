const { builtinModules } = require("module");
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertEqual = require('./assertEqual');


// Function Implementation

/*
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
*/

module.exports = eqArrays;  

// Test code
eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS


/*
However, there's a small issue with your test cases. You've written the test cases correctly, but you're not using the assertEqual function for all of them. Remember, the requirement is to use assertEqual to compare the output of eqArrays against a boolean for all test cases.

For example, you have:

eqArrays([1, 2, 3], [1, 2, 3]) // => true
This should be:

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
Make sure to update all your test cases to use assertEqual in this way. Keep up the good work!

*/