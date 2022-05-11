// Complete the solution so that the function will break up camel casing, using a space between words.
// Example

// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
  // split the input into an array
   let arr = string.split('')
   // create an empty array to push values into
   let newArr = []
   // begin a for loop to evaluate the values in arr
   for(let i = 0; i < arr.length; i++) {
     // compare the value to see if the value is a capital letter
     if(arr[i] === arr[i].toUpperCase()) {
       // if true, push an empty space before pushing the the value into newArr
       newArr.push(" ")
       newArr.push(arr[i])
     }
     // if the value is not equal to a capital letter, push the value with no spaces
     else {
       newArr.push(arr[i])
    }
 }
  // return the array after joining it into a single string
  return newArr.join('')
}

