// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count (string) {  
  // create the empty object 
  let count = {}
  // split the string into an array, then put counters for each character into the empty object
  string.split('').map(x => count[x] = count[x] + 1 || 1)
  // return the final counts
  return count
}
