const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
});

it("returns '5' for ['5']", () => {
  assert.strictEqual(head(['5']), '5'); 
});

/*
const head = function(array) {
  return array[0];
};

const assertEqual = require('./assertEqual');


// Test code
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
*/


/*
(1) Modularize assertEqual
Great job on your assertEqual function implementation! It looks like it should work as expected. However, there's one thing missing in your assertEqual.js file. You need to export the assertEqual function so that it can be used in other files. You can do this by adding the following line at the end of your assertEqual.js file:

module.exports = assertEqual;
In your test/assertEqualTest.js file, you've done a great job importing the assertEqual function using the require syntax. However, the test cases in your assertEqual.js file are not necessary. The assertEqual.js file should only contain the function definition and its export. The test cases should be in the test/assertEqualTest.js file, which you've done correctly.

Keep going! You're almost there.
*/