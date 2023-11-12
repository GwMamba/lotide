const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
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

const eqObjects = function(object1, object2) {
  const array1 = Object.keys(object1);
  const array2 = Object.keys(object2);

  if (array1.length !== array2.length) {
    return false;
  }

  for (const item of array1) {
    if (Array.isArray(object1[item]) && Array.isArray(object2[item])) {
      if (!eqArrays(object1[item], object2[item])) {
        return false;
      }
    } else {
      if (object1[item] !== object2[item]) {
        return false;
      }
    }
  }
  return true;
};

module.exports = eqObjects;  
