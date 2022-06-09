// Kata Task

// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

//     humanYears >= 1
//     humanYears are whole numbers only

// Cat Years

//     15 cat years for first year
//     +9 cat years for second year
//     +4 cat years for each year after that

// Dog Years

//     15 dog years for first year
//     +9 dog years for second year
//     +5 dog years for each year after that

var humanYearsCatYearsDogYears = function(humanYears) {
  // create variables for the equations of each animal age
  let catYears = ((humanYears - 2) * 4) + 24
  let dogYears = ((humanYears - 2) * 5) + 24
   // ternary operator that checks if humanYears = 1. If not, returns the calculations.
  return humanYears === 1 ? [1, 15, 15] : [humanYears, catYears, dogYears]
}

// or

var humanYearsCatYearsDogYears = function(humanYears) {
  // Your code here!
  if(humanYears == 1) {
    return [1, 15, 15]
  }
  else {
  let catYears = ((humanYears - 2) * 4) + 15 + 9
  let dogYears = ((humanYears - 2) * 5) + 15 + 9
  
  return [humanYears, catYears, dogYears]
}
  }