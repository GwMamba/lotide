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

const assertArraysEqual = function(arr1, arr2) {
  const areEqual = eqArrays(arr1, arr2);
  if (areEqual) {
    console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

const middle = function(array) {
  const length = array.length;
  if (length < 2) {
    return [];
  }
  const middleIndex = Math.floor(length / 2);
  if (length % 2 === 0) {
    return [array[middleIndex - 1], array[middleIndex]];
  } else {
    return [array[middleIndex]];
  }
};

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

assertArraysEqual(middle([1, 2, 3, 4]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

/*
(1) Implement the middle function
Great job! Your code meets all the requirements. The middle function correctly returns the middle elements of an array, and you've included the eqArrays and assertArraysEqual functions for testing. Your test cases are comprehensive and correctly demonstrate the functionality of your middle function.

One small suggestion for improvement is to adjust the condition in your middle function that checks if the array length is less than 2. According to the requirements, an array should return an empty array if it has less than 3 elements, not 2. So, you should change:

if (length < 2) {
  return [];
}
to:

if (length < 3) {
  return [];
}
/*