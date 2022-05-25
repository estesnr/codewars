// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

function capitalize(s){
  // split the input into an array
  let arr1 = s.split('')
  // create two empty arrays to push values into
  let str1 = []
  let str2 = []
  // begin for loop to check through arr1 values
  for(let i = 0; i < arr1.length; i++) {
    // if the index of the value is divisible by 2 (even)
    if(i % 2 === 0) {
      // push a capital version of the value into the first empty array, and a lowercase into the second
      str1.push(arr1[i].toUpperCase())
      str2.push(arr1[i])
    }
    else {
      // do the opposite if the index of the value is odd
      str1.push(arr1[i])
      str2.push(arr1[i].toUpperCase())
    }
  }
  // return a new array of values that turns the newly created arrays into strings
  return [str1.join(''), str2.join('')]
}
 
