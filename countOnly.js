// Function Implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

const countOnly = function(allItems, itemsToCount) {

  const results = {}
  const allItem = Object.keys(allItems);

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
}

module.exports = countOnly;


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// Test code
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(5, 25);
assertEqual("Alberta", "Ontario");
assertEqual("X56", "X56");


/*
However, there's a small part of your code that seems unnecessary:

const allItem = Object.keys(allItems);
This line of code doesn't seem to be used anywhere in your function. You can safely remove it.

Also, your test cases are well written and cover the expected outcomes. However, the last five test cases are not related to the countOnly function. While it's good to test the assertEqual function, these tests are not necessary for this specific requirement.
*/