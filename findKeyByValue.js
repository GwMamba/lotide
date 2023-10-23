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

const bestTVShowsByGenre = {
  sci_fi: "The Expaanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);