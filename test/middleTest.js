const assert = require('chai').assert;
const middle = require('../middle');

describe("middle", () => {
  it("returns 2 for [1, 2, 3]", () => {
    assert.strictEqual(middle([1, 2, 3]), 2);
  });
  it("returns 3 and 4 for [1, 2, 3, 4, 5, 6]", () => {
    assert.strictEqual(middle([1, 2, 3, 4, 5, 6]), 3, 4);
  });
});

const assertArraysEqual = require('../middle');


assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

/*
(1) Modularize middle
Great job on your middle.js file! You've correctly implemented the middle function and exported it using module.exports. However, you've also included eqArrays and assertArraysEqual functions in this file, which are not required according to the assignment. You might want to consider moving these functions to a separate file for better organization and readability.

In your middleTest.js file, you've correctly imported the middle function using require. However, it seems like you're trying to import assertArraysEqual from ../middle, which is not correct. You should import assertArraysEqual from its own file.

Also, you've used assert.strictEqual in your test cases, which is not suitable for comparing arrays. assert.strictEqual checks if the two values are strictly equal (i.e., they refer to the same object), which is not the case when comparing arrays. You should use assert.deepEqual instead, which checks if two objects, or in this case arrays, are equal in value.

Keep going! Your submission seems like it might be missing something. Take a look at:

assert.strictEqual(middle([1, 2, 3]), 2);
You might want to change this to:

assert.deepEqual(middle([1, 2, 3]), [2]);
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