// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// Example(Input --> Output)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]

// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.

function addLength(str) {
// split the input string into an array of each word
  let arr = str.split(' ')
  // begin a for loop to cycle through the newly created array
  for(let i = 0; i < arr.length; i++) {
    // concat each word with the length of each word
    arr[i] = `${arr[i]} ${arr[i].length}`
  }
  // return the final value
  return arr
}
