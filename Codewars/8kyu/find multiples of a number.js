function findMultiples(integer, limit) {
    //your code here
    let newArr = []
    for(let i = 1; i <= limit; i++) {
      if((integer * i) <=  limit) {
      newArr.push(integer * i) 
        }
      else {
        continue
      }
    }
    return newArr
  }