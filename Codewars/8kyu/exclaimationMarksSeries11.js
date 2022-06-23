// Description:

// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
// Examples

// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"



function replace(s){
  // look for a range of values (vowels) and replace them with "!"
  return s.replace(/a|e|i|o|u/gi, "!")
}
