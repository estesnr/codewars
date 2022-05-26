// Your function takes two arguments:

//     current father's age (years)
//     current age of his son (years)

// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

function twiceAsOld(dadYearsOld, sonYearsOld) {
  // establish variables to manipulate the dad's age and a counter
  let dadUp = dadYearsOld
  let dadDown = dadYearsOld
  let counter = 0;
  // begin a loop to start manipulating the variables
  for(let i = 0; i < Infinity; i++) {
    // evaluate if the dad age variables are double the son's age
     if((dadUp / 2 === sonYearsOld) || (dadDown / 2 === sonYearsOld)) {
       // if true, return the value of the counter
        return counter 
   }
    // if not
    else {
      // manipulate the variables for the dad's age, and add one to the counter
      dadUp++
      dadDown--
      counter++
    }
 }
  }
