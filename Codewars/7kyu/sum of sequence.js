const sequenceSum = (begin, end, step) => {
    // May the Force be with you
    let sum = 0
    for(let i = begin; i <= end; i+= step) {
      sum += i;
    }
    if(begin > end) {
      return 0
    }
    else {
      return sum
    }
  }