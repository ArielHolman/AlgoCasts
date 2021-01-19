// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// Create an empty array to hold the chunks called chunked_arr
// Iterate through the given array, for each element in the given array
// Pull out the last element of the chunked_arr (a chunk)
// If the last element does not exist or its size is equal to size
// Push a new chunk into the chunked_arr with the current element
// Else add the current element into the chunk

function chunk(array, size) {
  // const chunked = [];
  // for (let element of array) {
  //   // -1 becasue there is not a last element in the chuncked array to begin with
  //   const last = chunked[chunked.length - 1];
  //   if (!last || last.length === size) {
  //     chunked.push([element]);
  //   } else {
  //     last.push(element);
  //   }
  // }
  // return chunked;

  const chunked = []
  let index = 0

  while(index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size
  }
  return chunked
}

module.exports = chunk;
