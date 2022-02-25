const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

// We want all the titles to be "title case": the first letter of each word
// should be capitalized. Create a new array containing the names of the tutorials
// with proper title case formatting. For example,
// `'what does the this keyword mean?'` should become
// `'What Does The This Keyword Mean?'`.

// Write the following function: `titleCased()`: returns an array with title case tutorial names.
// This function takes no arguments and should use the global `tutorials` variable as data.

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// const titleCased = () => {
//   return tutorials.map(capitalizeFirstLetter);
// };

const titleCased = () => {
  // iterate through tutorial, pass anon function on each item
  return tutorials.map(function (sentence) {
    // each item is a string, need to split into array of words
    const arrOfWords = sentence.split(" ");
    console.log(arrOfWords);

    // need to access each element of the string and pass capitalize function
    // for (let i = 0; i < arrOfWords.length; i++) {
    //   arrOfWords[i] =
    //     arrOfWords[i].charAt(0).toUpperCase() + arrOfWords[i].slice(1);
    //   console.log(arrOfWords[i]);
    // }

    // try as .map instead:
    const capitalizedWords = arrOfWords.map(capitalizeFirstLetter);

    const result = capitalizedWords.join(" ");
    console.log(result);
    return result;

    // return arrOfWords(capitalizeFirstLetter);
  });
};

// Need to iterate through the `tutorials` array, modifying the name of each tutorial.
// **Also** need to access and modify each individual word.

// Some questions to consider:

// - How can we "iterate" through individual words in a string?
// - How can we execute an iteration inside an iteration?
// - How can we capitalize just the first letter in a word?

// A couple of hints:
// - Break the task into smaller chunks: using the console or a REPL, start by
//   figuring out how to modify one individual element in the `tutorials` array.
//   Once you've got that working, then figure out how to update the array itself.
