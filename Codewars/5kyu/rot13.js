// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should
// be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message){
  // creates two variables consisting of the alphabet, and the alphabet with translated positions
  let inputChar = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let outputChar = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
  // create a variable that stores the index values of each letter in "message"
  let strIndex = x => inputChar.indexOf(x)
  // configure values of the original message into a new variable with the values of the index of 
  // the original letters with the values of the converted letters
  let cypher = x => strIndex(x) > -1 ? outputChar[strIndex(x)] : x
  // return the message, split into an array, running it through the "cypher", then joining the new
  // letters back together
  return message.split('').map(cypher).join('')
  
  }
