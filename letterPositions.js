const letterPositions = function(paragraph) {
  const results = {};
  
  for (let i = 0; i < paragraph.length; i++) {
    const charachter = paragraph[i];
    if (charachter !== ' ') {
      if (results[charachter]) {
        results[charachter].push(i);
      } else {
        results[charachter] = [i];
      }
    }
  }
  
  return results;
};


const assertArraysEqual = function(arr1, arr2) {
  const areEqual = eqArrays(arr1, arr2);
  if (areEqual) {
    console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
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

module.exports = letterPositions;


assertArraysEqual(letterPositions("hello").e, [1]);

/*
(1) Implement the letterPositions function
Great job! Your letterPositions function correctly takes a string as input and outputs an object with all the letters that appear in the string as keys and the positions they appear in the string as values. Your eqArrays and assertArraysEqual functions also seem to be working as expected.

However, there is one small thing you might want to improve. You only have one test case for your letterPositions function. While this test case does work, it would be beneficial to add more test cases to ensure your function works for a variety of inputs. For example, you could add tests for strings with multiple instances of the same letter, strings with no repeating letters, or strings with special characters.

Here's an example of how you could add more tests:

assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("lighthouse in the house").i, [1, 11]);
Adding these tests will help ensure your letterPositions function is robust and works as expected in a variety of scenarios. Keep up the good work!
*/
