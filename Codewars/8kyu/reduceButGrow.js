// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

function grow(x){
  let prod = 1
  x.forEach((int, y) => {
    prod *= int
  })
  return prod
}
