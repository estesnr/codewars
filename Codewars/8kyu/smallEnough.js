// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

function smallEnough(a, limit){
  // establish a counter
  let count = 0;
  // create a for loop to evaluate the array
  for(let i = 0; i < a.length; i++) {
    // compare the current array value to the limit
    if(a[i] <= limit) {
      // if it is, add one to the counter
      count++
    }
  }
  // evaluate if the counter equals the length of the array, checking if all values are within the limit
  return count == a.length
}
