// Task

// Given a string str, reverse it omitting all non-alphabetic characters.
// Example

// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".
// Input/Output

//     [input] string str

// A string consists of lowercase latin letters, digits and symbols.

//     [output] a string

function reverseLetter(str) {
  // create an empty array to put values into
  let arr = []
  // loop through the string, starting from the end
  for(let i = str.length; i >= 0; i--) {
    // test if the current character in the loop is a letter
    if(/[a-z]/.test(str[i])) {
      // if it is, push the value into our empty array
      arr.push(str[i])
    }
  }
  // return our reversed array, and join it into a string
  return arr.join('')
}

// OR

function reverseLetter(str) {
  // single line code to split the input into an array, reverse it, join it back into a string, 
  // then filter out everything that isn't a letter
  return str.split('').reverse().join('').replace(/[^a-z]/gi, '')
}
