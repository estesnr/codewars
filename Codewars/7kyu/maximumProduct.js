// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

function adjacentElementsProduct(array) {
  // create variables to store current product to evaluate, and a maximum value
  let product = 1
  let max = -Infinity
  // begin looping through the array
  for(let i = 0; i < array.length; i++) {
    // assign the product variable to the next adjacent pair of array elements
    product = (array[i] * array[i+1])
    // compare it against the max variable, if larger, assign the new value to the max variable
    if(product > max) {
      max = product
    }
    // if not, reset the product value and loop through again
    else {
      product = 1
    }
  }
  // return the final value
  return max
}
