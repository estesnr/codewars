// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

//     make as few changes as possible.
//     if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

function solve(s){
  // split the input string into an array of letters
  let newArr = s.split('')
  // establish counters for lowercase and uppercase letters
  let lowerCount = 0
  let upperCount = 0
  // create a for loop to evaluate the individual values in the array
  for(let i = 0; i < newArr.length; i++) {
    // evaluate if the current letter is lowercase
    if(newArr[i] == newArr[i].toLowerCase()) {
      // if so, add one to the lowercase counter
      lowerCount++
    }
    // evaluate if the current letter is uppercase
    else if(newArr[i] == newArr[i].toUpperCase()) {
      // if so, add one to the uppercase count
      upperCount ++
    }
  }
  // ternary operator to compare the lowercase to uppercase counter, and convert the input string appropriately
  return lowerCount >= upperCount ? s.toLowerCase() : s.toUpperCase()
}
