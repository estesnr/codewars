// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false



function XO(str) {
    // create the variables to count the x's and o's
  let countX=0;
  let countO=0;
    // begin searching through the string
  for(let i=0;i<str.length;i++){
     // check if the integer is an X in either upper or lower case, and add +1 to X counter if true
    if(str[i]=="x"|| str[i]=="X")
      countX++;
    // check if the integer is an O in either upper or lower case, and add +1 to O counter if true
    if(str[i]=="o"|| str[i]=="O")
      countO++;
  }
    // compare the count of x's and o's to eachother and check if they're equal
    if(countX==countO)  {
    return true
    }
    // if not, return false
  else {
  return false
  }
}
