// Function Implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed:", actual, "===", expected);
  } else {
    console.log("🛑🛑🛑 Assertion Failed:", actual, "!==", expected);
  }
};

// Test code
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(5, 25);
assertEqual("Alberta", "Ontario")
assertEqual("X56", "X56")