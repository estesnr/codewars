// You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

// Example (Input --> Output)

// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"

function reverse(string){
  // create new array to place values into
  let newArr = []
  // split the input string into an array of each word
  string = string.split(' ')
  // for loop to go through the input array in reverse
  for(let i = string.length; i >= 0; i--) {
    // push each value into newArr
    newArr.push(string[i])
  }
  // return the final array, joined into a string, and cutting off the space in the front
  return newArr.join(' ').substr(1)
}

// or

function reverse(string){
  return string.split(' ').reverse().join(' ');
}
