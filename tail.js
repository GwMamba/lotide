const tail = function(arr) {
  return arr.slice(1);
};

// Function Implementation
const assertEqual = require('./assertEqual');

module.exports = tail;

// Test Case: Check the original array
//const words = ["Yo Yo", "Lighthouse", "Labs"];
//tail(words); // no need to capture the return value since we are not checking it
//assertEqual(words.length, 3); // original array should still have 3 elements!

// Test code
assertEqual(tail([5,6,7]), 5);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");
