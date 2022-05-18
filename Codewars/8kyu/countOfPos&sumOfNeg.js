// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.
// Example

// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
    // create array to push values into later
    let arr = [];
    // create a counter for the positive integers
    let count = 0;
    // create a sum variable to store the negative integers
    let sum = 0;
    // check for null or empty arrays
    if(!input || !input.length) {
      // return an empty array in this case
      return []
    }
    // if input isn't empty or null:
    else {
    // begin a for loop to look through the elements of input
    for(let i = 0; i < input.length; i++) {
      // ternary operator to look for either pos or neg integers. if pos, add 1 to counter. if neg,
      // add value to the sum variable
      input[i] > 0 ? count++ : sum += input[i] 
    }
      // push our final count and sum into our array from earlier
    arr.push(count, sum)
      // return our final solution
    return arr
      }
}
