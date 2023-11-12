const eqArrays = function(arr1, arr2) {
    // Check if both arrays are the same length and if not return, false.
  if (arr1.length !== arr2.length) {
    return false;
  }

  // For loop to iterate through elements of the first array.
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// Function implementation for assertion tests:

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// otherwise, false.

const eqObjects = function(object1, object2) {

  const array1 = Object.keys(object1);
  const array2 = Object.keys(object2);

  if (array1.length !== array2.length) {
    return false;
  }

  for (const item of array1) {
    if (Array.isArray(object1[item]) && Array.isArray(object2[item])) {
      if (!eqArrays(object1[item], object2[item])) {
        return false;
      }
    } else {
      if (object1[item] !== object2[item]) {
        return false;
      }
    }
  }
  return true;
};


// Declare function assertObjectsEqual which will take in two objects and console.log an appropriate message to the console.

const assertObjectEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log((`✅✅✅ Assertion Passed: ${actual} === ${expected}`));
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject);

// This should return true if objects have identical keys with identical values


module.exports = assertObjectEqual;
