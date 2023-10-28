const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  let object = {};

  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      i++;
    }
    if (object[string[i]] === undefined) {
      object[string[i]] = 1;
    } else {
      object[string[i]]++;
    }
  }
  return object;
}

console.log(countLetters("hello, My name is Gerald."));

module.exports = countLetters;


/*
However, there are a couple of things you might want to consider improving:

In your for loop, you're incrementing i if the character at string[i] is a space. This could potentially cause an issue because it might skip the next character after the space. Instead of incrementing i, you could just continue to the next iteration of the loop. Here's how you could change it:
if (string[i] === ' ') {
  continue;
}
Your function is currently counting punctuation and spaces as well as letters. If you want to only count letters, you could add a condition to check if the character is a letter before adding it to the object. You can use the charCodeAt method to check if the ASCII value of the character is within the range of lowercase or uppercase letters.

You've done a good job implementing the assertEqual function, but you haven't used it in your code. The requirements specify that you should use assertEqual to test the countLetters function. You could add some test cases like this:

const result = countLetters('hello, My name is Gerald.');
assertEqual(result['h'], 1);
assertEqual(result['e'], 2);


*/