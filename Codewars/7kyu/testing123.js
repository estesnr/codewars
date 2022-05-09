// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples:

// number([]) // => []
// number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]

var number=function(array){
  // create the new array to push the values into
  let newArr = []
  // create a count value to generate the numbering system
  let count = 1
  // create a loop to go through the array values
  for(let i = 0; i < array.length; i++) {
    // push the current array value with the current number value into the new array
    newArr.push(`${count}: ${array[i]}`)
    // increase the count 
    count++
  }
  // return the final array solution
  return newArr
}
