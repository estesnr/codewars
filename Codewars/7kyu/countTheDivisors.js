// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.
// Examples (input --> output)

// 4 --> 3 (1, 2, 4)
// 5 --> 2 (1, 5)
// 12 --> 6 (1, 2, 3, 4, 6, 12)
// 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)

function getDivisorsCnt(n){
  // establish the count 
  let count = 0
  // create a loop to generate cases up to 'n'
  for(let i = 0; i <= n; i++) {
    // compare the current value "i" as a divisor to "n"
    if(n % i === 0) {
      // if successful, add one to the count
      count += 1
    }
  }
  // return the final count
  return count
}

