const assertEqual = require('./assertEqual');


// Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match. 

const eqArrays = function(arr1, arr2) {
  // Check if both arrays have same length, if not return false.
  if (arr1.length !== arr2.length) {
    return false;
  }
  // For loop to iterate through elements of the first array.
  for (let i = 0; i < arr1.length; i++) {
    // Compare both array indices
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;  

