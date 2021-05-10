// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//use regex to remove spaces and punctuation
//ex: const word = "HI THERE!!!!!"  REGEX CODE -->  word.replace(/[^\w]/g,"").toLowerCase  <-- This returns hithere
//one possible way is to create a charMap
//hint: compare the legnth of the word and number of keys/letters before counting how many of each. This will help to weed out any bad matches to begine with and stop us from doing unnecesary work

// split into an array, sort, then join back into a string
//helper function
function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

module.exports = anagrams;

// charMap option
// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);

//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }

//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false;
//     }
//   }

//   return true;
// }

// // helper function for char map
// function buildCharMap(str) {
//   const charMap = {};

//   for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//   return charMap;
// }

// module.exports = anagrams;
