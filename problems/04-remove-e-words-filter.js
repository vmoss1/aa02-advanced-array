/*
Write a function `removeEWords(sentence)` that accepts a sentence string as an
arg. The function should return a new string, containing only the words that
don't have the letter "e" in them.

Solve this using Array's `filter()` method.

Examples:

console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'

*/ //input: string
// output: new str with words that dont have an e

let removeEWords = function (sentence) {
  let words = sentence.split(" ");

  let noE = words.filter((word) => {
    // put filter in a variable so that it can be joined
    if (!word.includes("e")) {
      return word;
    }
  });
  return noE.join(" ");
};

console.log(removeEWords("Enter the building")); // 'building'
console.log(removeEWords("What time is it everyone?")); // 'What is it'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = removeEWords;
} catch (e) {
  module.exports = null;
}
