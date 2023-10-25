const letterPositions = function(paragraph) {
  const results = {};
  
  for (let i = 0; i < paragraph.length; i++) {
    const charachter = paragraph[i];
    if (charachter !== ' ') {
      if (results[charachter]) {
        results[charachter].push(i);
      } else {
        results[charachter] = [i];
      }
    }
  }
  
  return results;
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

assertArraysEqual(letterPositions("hello").e, [1]);