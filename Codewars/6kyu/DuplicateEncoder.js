//The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
//Examples

//"din"      =>  "((("
//"recede"   =>  "()()()"
//"Success"  =>  ")())())"
//"(( @"     =>  "))((" 

function duplicateEncode(word){
    // ...
  let newStr = ""
  
  // turn "word" into an arry of lowercase letters
  let arr = word.toLowerCase().split('')
  
  // establish the count of integers
  let count = x => {
    return arr.filter(y => x === y).length
  }
  
  // map count of characters to index of characters
  let newArr = arr.map(count)
  
  // create the last array with brackets
  
  let finalArr = []
  for(let i = 0; i < newArr.length; i++) {
    if(newArr[i] == 1) {
      finalArr.push("(");
    }
    else {
      finalArr.push(")");
    }
  }
  // finally take the new array and join it into the final 
  
  let solution = finalArr.join("")
  return solution
}

