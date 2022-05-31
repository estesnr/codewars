// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

function between(a, b) {
  // create an empty array
  let arr = []
  // begin a for loop to cycle through values between the 2 inputs
  for(let i = a; i <= b; i++) {
    // push each value into the empty array
    arr.push(i)
  }
  // return the final answer
  return arr
}
