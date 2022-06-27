// Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

function include(arr, item){
  // establish a check variable
  let check = false
  // loop through the input array
  for(let i = 0; i < arr.length; i++) {
    // check for the input value
    if(arr[i] === item) {
      // if it's found, change the check variable to true
      check = true
    }
  }
  // return the final variable
  return check
}

// or

function include(arr, item) {
  return arr.includes(item)
}
