// Your task, is to create NxN multiplication table, of size provided in parameter.

// for example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9

// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

multiplicationTable = function(size) {
  // create empty array
  let arr = []
  // begin a loop to start the multiplication table
  for(let i = 1; i <= size; i++) {
    // create an empty array that resets every loop
    let x = []
    // begin looping through integers to multiply with i
    for(let j = 1; j <= size; j++) {
      // push each multiplication solution into the array "x"
      x.push(i*j)
    }
    // push the small array into the overall bigger array "arr"
    arr.push(x)
  }
  // return the final array
  return arr
  
}
