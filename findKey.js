const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = findKey;  



const result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 2 }
}, x => x.stars === 2);

assertEqual(result, "noma");

/*
(1) Implement the findKey function
Great job! Your code meets the requirements of the task. The findKey function correctly takes an object and a callback as arguments, calls the callback on the values of the object, and returns the first key where the callback returns a truthy value. Your test case also correctly checks the functionality of the findKey function.

One suggestion for improvement is to consider using Object.keys() to get an array of the object's keys. This can make your code more readable and explicit. Here's how you could implement it:

const keys = Object.keys(object);
for (const key of keys) {
  if (callback(object[key])) {
    return key;
  }
}
This is just a suggestion and your current implementation is perfectly fine as well. Keep up the good work!
*/