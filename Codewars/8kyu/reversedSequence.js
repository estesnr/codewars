// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = n => {
  // create the empty array
  let arr = []
  // create a for loop to cycle through the values, starting at the value and counting backwards to 1
  for(let i = n; i > 0; i--) {
    // push each integer into the empty array
    arr.push(i)
  }
  // return the final array
  return arr
};
