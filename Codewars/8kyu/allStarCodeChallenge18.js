// All Star Code Challenge #18

// Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0


function strCount(str, letter){  
  // turn string into array
  let arr = str.split('')
  // establish a counter
  let count = 0
  // search each character in the array
  for(let i = 0; i < arr.length; i++) {
    // compare it to the target
    if(arr[i] === letter) {
      // increase the count every time the target is found
      count++
    }
  }
  // return the final count
  return count
}
