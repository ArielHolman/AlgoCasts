// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// my pseudocode:
// 1.split the numbers, reverse the order, pop 0's, join it

// notes from video:
// since these intergers are numbers we need to use the .toString and then use regular techniques.
// make sure the end product is a number and not a string.
// math.sign() needs to be used in this problem - we pass in a number, if positive it returns 1, if not, returns -1. May be useful in keeping the negative.
// if we split into an array and then join it back, we need to parseInt(numberVariable.toString())

function reverseInt(n) {
  // my solution: this solution does not account 0 as a middle number. it automattically deletes it. so more would need to be added to fix this.

  // newNum = n.toString().split("").reverse()
  // let reversedNum = []
  // let sign = Math.sign(n)

  // for (let char of newNum) {
  //   if (char !== "-" && char !== "0") {
  //     reversedNum.push(char)
  //   }
  // }
  // return parseInt(reversedNum.join("").toString())*sign

  //Video Solution:
  const reversed = n.toString().split("").reverse().join("");

  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
