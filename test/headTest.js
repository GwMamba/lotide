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

/*
(1) Incorporate Mocha and Chai
Great job on importing the head function and the assert function from the Chai library. Your test cases are also well structured using Mocha's describe and it functions, and Chai's assert.strictEqual for assertions.

However, there's a small issue with the placement of your second test case. It should be inside the describe block. Currently, your code looks like this:

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
});

it("returns '5' for ['5']", () => {
  assert.strictEqual(head(['5']), '5'); 
});
The second it block should be inside the describe block, like this:

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
});
The commented out code at the bottom of your file seems to be unrelated to the current requirement. If it's not needed, consider removing it to keep your code clean and focused.
*/