// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// slice method ex: word = "there"  word[0].toUpperCase() = T   word.slice(1) = here

function capitalize(str) {
  // let strArr = str.split(" ")

  // map version
  // const upperArr = strArr.map(str => {
  //   const firstLetter = str[0].toUpperCase()
  //   const restOfWord = str.slice(1)
  //   return firstLetter.concat(restOfWord)
  // })
  // return upperArr.join(" ")

  // short easy version
  // const words = [];
  // for (let word of str.split(" ")) {
  //   words.push(word[0].toUpperCase() + word.slice(1));
  // }
  // return words.join(" ");

  //****1st character and every character next to a space
  //This will capitalize the first character in the sentence
  let result = str[0].toUpperCase();

  // iterate over each character and if space to left is a space then capitalize
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}

module.exports = capitalize;
