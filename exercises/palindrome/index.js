// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// questions:
// 1.
// 2.

// pseudo code
// 1.need 2 variables (str, reversedStr)
// 2.turn str into an array by split each character
// 3.reverse characters
// 4.combine and push to reversedStr
// 5.compare if str = reversedStr return true else false

function palindrome(str) {
  let reversedStr = str.split("").reverse().join("");

  // if (str===reversedStr){
  //   return true
  //     } else {
  //   return false
  // }

  // *** Ternary answer ***
  // return str===reversedStr ? true : false

  //*** Very Short If Statement ***
  return str === reversedStr;

  // *** Not ideal becuase it compares character by character and it basically takes longer to return.***
  // return str.split("").every((char,i)=> {
  //   return char === str[str.length -i -1]
  // }
  // )
}

module.exports = palindrome;
