// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.


function sumMix(x){
  // create a variable for the sum
  let sum = 0
  // create a foreach loop to add each element to the sum
  x.forEach(function(i) {
    // add the "+" in front of i to convert strings to integers
   sum += +i
  })
  // return the value
  return sum
}
  
  // OR
  
function sumMix(x) {  
  // simple reduce function to add all elements into the declared "sum"
  let sum = x.reduce((i, a) => +i + +a)
  return sum                   
}
