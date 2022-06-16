// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). 
// The original array will be not empty and will contain at least "number" even numbers.

// For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

function evenNumbers(array, number) {
  // establish a counter variable
  let counter = 0
  // create a new array to plug values into
  let newArr = []
  // cycle through the input array in reverse
    for(let i = array.length; i >= 0; i--) {
      // check if the counter has reached the specified limit
      if(counter < number) {
        // check if the current array value is even
        if(array[i] % 2 === 0) {
          // if so, push it to the empty array
          newArr.push(array[i])
          // add +1 to the counter variable
          counter++
        }
      }
      }
  // return the final product, but reversed so the original order is preserved
  return newArr.reverse()
}
