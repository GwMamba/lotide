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