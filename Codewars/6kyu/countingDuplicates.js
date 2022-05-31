// Count the number of Duplicates

// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input 
// string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
// Example

// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text){
  // change the input into a lowercase array sorted alphabetically
  text = text.toLowerCase().split('').sort();
  // makes an array with new elements from "text"
  let next = [...new Set (text)]
  // filter the array by the character value of "y"
  let counter = x => {
    return text.filter(y => x === y).length
  }
  // maps the count of characters in the input
  let nexter = next.map(counter)
  
  // returns the count of characters
  return nexter.filter(x => x > 1).length
}
