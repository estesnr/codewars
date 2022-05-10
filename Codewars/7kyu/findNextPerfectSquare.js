// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// Examples:(Input --> Output)

// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square

function findNextSquare(sq) {
  // check in the input isn't a perfect square and return -1 if this is the case
  if(Math.sqrt(sq) % 1 !== 0) {
  return -1;
    }
  // if the input is a perfect square, proceed to look for the next one
  else {
    // start our count at the next number after the input, and start looking until we hit the input squared
    for(let i = sq + 1; i <= Math.pow(sq, 2); i++) {
      // if the next input isn't a perfect square, continue looking
      if(Math.sqrt(i) % 1 !== 0) {
        continue
      }
      // return the input we were looking for
      else {
        return i
      }
    }
  }
}

