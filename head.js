
const head = function(array) {
  return array[0];
};

const assertEqual = require('./assertEqual');


// Test code
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");