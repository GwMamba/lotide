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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

module.exports = map;


const words = ["ground", "control", "to", "major", "tom"];

//Now let's cause our first error by calling our nonexistent map function.

const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);

const results2 = map(words, word => words.length);
assertArraysEqual(results2, ["6", "7", "2", "500", "3"]);

const results3 = map(words, word => words.toUpperCase);
assertArraysEqual(results3, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);

/*
(1) Implement the map function
Great job on implementing the map function! It correctly takes an array and a callback function as arguments and returns a new array with the callback function applied to each element.

However, there are a few issues with your test cases that need to be addressed:

In your second test case, you're trying to get the length of each word in the array. However, you're using words.length instead of word.length. This is causing your test to fail because words.length will always return the length of the entire array, not the length of the individual word. Here's the problematic line:
const results2 = map(words, word => words.length);
You should change words.length to word.length to get the length of each individual word.

In your third test case, you're trying to convert each word in the array to uppercase. However, you're using words.toUpperCase instead of word.toUpperCase(). This is causing your test to fail because words.toUpperCase is not a function and word.toUpperCase() is the correct way to convert a string to uppercase. Here's the problematic line:
const results3 = map(words, word => words.toUpperCase);
You should change words.toUpperCase to word.toUpperCase() to convert each individual word to uppercase.
*/