// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
// Examples

// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function order(words){
  // split the input into an array of each individual word
  let arr1 = words.split(' ')
  // create an empty array for later
  let arr2 = []
  
  // for each loop to loop through the new array of individual words
  arr1.forEach(word => {
    // split each word into an array of letters
    let x = word.split('')
    // extract the number from each word by looking for which character can be parseInt'ed
    let y = x.find(el => parseInt(el))
    // push the word and number into the empty array
    arr2.push([word, parseInt(y)])
  })
  
  // sort arr2 by looking at the number we pulled off of it in the for each loop,
  // then splicing the number off of it
  arr2.sort((a, b) => a[1] - b[1]).map(x => x.splice(1,1))
  // return the final array joined into a single string
  return arr2.join(' ')
  }
