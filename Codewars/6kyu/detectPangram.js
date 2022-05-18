// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog"
// is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


function isPangram(string){
  // create an array of every letter in the alphabet
  let alpha = "abcdefghijklmnopqrstuvwxyz".split('')
  // convert the input to all lowercase
  let str = string.toLowerCase();
  // look at every element in the alphabet array and see if it's included in "str"
  return alpha.every(x => str.includes(x));
}
