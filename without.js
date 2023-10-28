const without = function(source, itemsToRemove) {
  let result = [];

  for (const item of source) {
    if (!itemsToRemove.includes(item)) {
      result.push(item);
    }
  }
  return result;
};

module.exports = without;


// Test Cases 
const words = ["hello", "world", "lighthouse"];
const result = without(words, ["lighthouse"]);

console.log(result); // Output: ["hello", "world"]

// Make sure the original array was not altered
/*
assertArraysEqual(without(words, ["hello", "world", "lighthouse"]));
*/

/*
(1) Implement the without function
Great job on your without function! It correctly creates a new array and populates it with elements from the source array that are not present in the itemsToRemove array.

However, there are a couple of things you might want to revise:

You have commented out the assertArraysEqual function call. This function is important for testing whether your without function is working correctly. You should uncomment this line and make sure to define the assertArraysEqual function at the top of your file.

The test case for assertArraysEqual is not correct. You are comparing the result of without(words, ["hello", "world", "lighthouse"]) with words itself. According to the requirement, you should compare words with ["hello", "world", "lighthouse"] to make sure the original array was not altered by the without function.

You have only one test case. It would be good to add more test cases to ensure your without function works as expected in different scenarios. For example, you could add tests for arrays of numbers, or arrays where the itemsToRemove array is empty.
*/