// John has invited some friends. His list is:

// s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

// Could you make a program that

//     makes this string uppercase
//     gives it sorted in alphabetical order by last name.

// When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

// So the result of function meeting(s) will be:

// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"

// It can happen that in two distinct families with the same family name two people have the same first name too.

function meeting(s) {
  // ALL OF THESE STEPS COULD BE DONE IN A SINGLE LINE, BUT I BROKE IT DOWN TO MAKE IT EASIER TO FOLLOW
  // create the roster variable, extracting all of the ";", capitalizing it, and 
  // splitting it into an array
  let roster = s.replace(/;/gi, ' ').toUpperCase().split(' ')
  // map a new version of the array where we reverse the characters around the ":", to swap
  // the first and last name
  roster = roster.map(ele => ele.split(':').reverse().join(', '))
  // return the final product, sorted alphabetically, mapping a new version of the array 
  // with the parenthesis required, and finally joining it to a final string.
  return roster.sort().map(ele => '(' + ele + ')').join("")
  
}
