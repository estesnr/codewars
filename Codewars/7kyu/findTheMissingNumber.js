
// The following was a question that I received during a technical interview for an entry level software developer position. I thought 
// I'd post it here so that everyone could give it a go:

// You are given an unsorted array containing all the integers from 0 to 100 inclusively. However, one number is missing. Write a function 
// to find and return this number. What are the time and space complexities of your solution?

function missingNo(nums) {
  // sort the array from lowest to highest
  let newArr = nums.sort((x, y) => x - y)
  // create a for loop to search the newly sorted array
  for(let i = 0; i < newArr.length; i++) {
    // evaluate if current number is NOT the same as adding 1 to the following value in the array
    if(newArr[i] + 1 !== newArr[i + 1]) {
      // return the missing number
      return newArr[i] + 1
    }
  }
  
}
