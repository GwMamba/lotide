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

/*
(1) Refactor with mocha and chai
Keep going! Your submission seems like it might be missing something. Let's take a look at your code:

In your tailTest.js file, you've correctly imported the assert function from the Chai library. However, you've also defined the tail function in this file, which is not necessary. You should import the tail function from the tail.js file using the require syntax. Replace your tail function definition with this line:

const tail = require('../tail');
Also, your test cases in tailTest.js are not structured using Mocha's describe and it functions. You should wrap your test cases in these functions to provide a clear description of what each test case is testing. For example:

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
});
In your middleTest.js file, you've correctly imported the middle function and the assert function from the Chai library. However, your test cases are not correctly comparing the output of the middle function to the expected output. The middle function returns an array, but you're comparing it to individual values. You should compare the entire output array to the expected output array. For example:

it("returns [2] for [1, 2, 3]", () => {
  assert.deepEqual(middle([1, 2, 3]), [2]);
});
Also, you've included some test cases outside of the describe function. All test cases should be included inside the describe function to ensure they are run as part of the test suite. For example:

describe("#middle", () => {
  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });
  // Include other test cases here
});
*/