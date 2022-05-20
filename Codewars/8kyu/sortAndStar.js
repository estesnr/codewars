// You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

function twoSort(s) {
  // sort the array alphabetically
  let sorted = s.sort()
  // store the first value into a string
  let first = sorted[0]
  // split the string into an array with each individual letter
  let arr = first.split('')
  // rejoin the array into a string while adding "***" between each character
  return arr.join("***")
  
}
