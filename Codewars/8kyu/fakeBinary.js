// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string


function fakeBin(x){
  // split the input into an array to evaluate characters
  let arr = x.split('')
  // create an empty array
  let newArr = []
  // for loop to evaluate individual characters of the original string in array form
  for(let i = 0; i < arr.length; i++) {
    // ternary operator to push the appropriate value into the new array
    arr[i] >= 5 ? newArr.push(1) : newArr.push(0)
    }
  // return the new array, joined into a single string
  return newArr.join('')
  
}
