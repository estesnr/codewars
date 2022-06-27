// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

function sumDigits(number) {
  // establish sum variable
  let sum = 0
  // get rid of the '-' if the number is negative
  if(number < 0) {
    number *= -1
  }
  // split the number into an array
  number = number.toString().split('')
  // loop through the new array
  for(let i = 0; i < number.length; i++) {
    // add each element in the array to the sum
    sum += +number[i]
  }
  // return the final value
  return sum
}
