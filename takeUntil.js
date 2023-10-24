const takeUntil = function(array, callback) {
  const result = [];
  for (const item of array) {
    if (!callback(item)) {
      result.push(item);
    } else {
      break;
    }
  }
  return result;
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

// Test Cases
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
 
/*
Expected Output
[ 1, 2, 5, 7, 2 ]
--
[ 'I\'ve', 'been', 'to', 'Hollywood' ]
*/

/*
It will take in two parameters as well:

The array to work with
The callback (which Lodash calls "predicate")

const takeUntil = function(array, callback) {
  // ...
}


The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.

To keep things simple, the callback should only be provided one value: The item in the array.
*/

/*
(1) Implement the takeUntil function
Great job! Your takeUntil function correctly implements the requirements. It takes an array and a callback as arguments, iterates through the array, and calls the callback on each element until the callback returns a truthy value. It then returns an array containing only the elements in the array that appear before the one that caused the callback to return truthy.

Your eqArrays and assertArraysEqual functions also seem to be implemented correctly, and you've used them to test your takeUntil function.

One suggestion I have is to use assertArraysEqual to compare your test results with the expected results. This way, you can automatically check if your function is working as expected. For example:

const expected1 = [1, 2, 5, 7, 2];
assertArraysEqual(results1, expected1); // should pass

const expected2 = ["I've", "been", "to", "Hollywood"];
assertArraysEqual(results2, expected2); // should pass
This will give you a clear pass/fail output for each test case, which can be more helpful than manually comparing the output and expected results. Keep up the good work!
*/