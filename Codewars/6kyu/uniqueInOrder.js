// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same 
// value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

var uniqueInOrder=function(iterable){
  // create an empty array to push values into
  let newArr = []
  // start a for loop to go through the input
  for(let i = 0; i < iterable.length; i++) {
    // compare a value with the value following it
    if(iterable[i] !== iterable[i + 1]) {
      // if it's not the same, push the value into the empty array
      newArr.push(iterable[i])
    }
  }
  // return the empty array
  return newArr
}
