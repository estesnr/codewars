// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially,
// rearrange the digits to create the highest possible number.
// Examples:

// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n){
  // create a variable that consists of the input, converted to a string, with the digits split
  // into an array, then run through a sort function that sorts the array values in descending order,
  // then joined back into a single string.
  let value = n.toString().split('').sort(function(a, b){return b - a}).join('')
  // return the final string converted back to an integer.
  return +value
}
