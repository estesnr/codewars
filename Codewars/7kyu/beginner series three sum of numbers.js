function getSum( a,b ) {
    let sum = 0
    let max = Math.max(a, b)
    let min = Math.min(a, b)
    for(min; min <= max; min++){
      sum += min
    } return sum
   }