const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(tvshows, show) {
  let tv = Object.values(tvshows);
  let tvs = Object.keys(tvshows);

  for (let i = 0; i < tv.length; i++) {
    if (tv[i] === show) {
      return tvs[i];
    }
  }
};

module.exports = findKeyByValue;  


const bestTVShowsByGenre = {
  sci_fi: "The Expaanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

//However, there's a small improvement you can make to your code. Instead of creating two separate arrays for keys and values, you can directly access the keys and values in the object. This will make your code more efficient and easier to read.

//Instead of creating tv and tvs, you can loop through the keys of the object directly and compare the value of each key to the input value. If they match, you can return the key immediately.

//Also, your function findKeyByValue is currently specific to TV shows. To make it more generic, consider renaming the parameters to something like object and value.

