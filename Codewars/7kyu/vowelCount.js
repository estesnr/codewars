// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  // establish a vowel count variable
  let vowelCount = 0
  // replace all of the vowels in the input string with the number 1
  str = str.replace(/[aeiou]/gi, 1)
  // loop through the string
  for(let i = 0; i < str.length; i++) {
    // compare each character to the number 1, which we changed from all vowels earlier
    if(str[i] == 1) {
      // if it's a 1, add 1 to the counter
      vowelCount++
    }
  }
  // return the final counter
  return vowelCount
}
