// Your task is to write function findSum.

// Upto and including n, this function will return the sum of all multiples of 3 and 5.

// For example:

// findSum(5) should return 8 (3 + 5)

// findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)

function findSum(n) {
  // create a sum variable 
  let sum = 0
  // create a for loop to cycle through values between 1 and "n"
  for(let i = 1; i <= n; i++) {
    // evaluate if the value is a multiple of 3 or 5
    if(i % 3 === 0 || i % 5 === 0) {
      // add the values to the sum variable
      sum += i
    }
  }
  // return the final answer
  return sum
}
