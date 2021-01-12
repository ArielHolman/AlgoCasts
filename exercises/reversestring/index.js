// import Avatar from '@material-ui/core/Avatar'
// import CardHeader from '@material-ui/core/CardHeader'
// import IconButton from '@material-ui/core/IconButton'
// import MoreVertIcon from '@material-ui/icons/MoreVert'
// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// questions to ask
//1. Can the input include sentences, and how do you want to handle output? remove white spacing etc?
//2. can i use a method?
//3.

// string1="Ariel is awesome" // solution: "emosewa si leirA"
// string2="divine" // solution: "enivid"



//***** Solution 1 ************
// pass a string as a variable
// create a varaible to pass in new string
// reverse the letters and pass in return to newstring variable
// return new string variable


// function reverse(str) {
//  let reversed = ""
//  for (let character of str) {
//    reversed = character + reversed
//  }
//  return reversed
// }


//********  Solution 2 ***********
// turn string into array by splitting
// reverse all characters
// join the array
// return string


// function reverse(str) {
//   return str.split("").reverse().join("")
// }

// ******* SOLUTION 3 ********

// do not use reverse
// turn into an array - split ["a","p", "p","l","e"]
// pop from the end of the array and push to a new array
// return new array

const reverse = (str) => {
  let reversed = []
  let strArr= str.split("")
  while(strArr.length > 0) {
   reversed.push(strArr.pop())
  }
  return reversed.join("")
 }


module.exports = reverse;