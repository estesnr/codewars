function squareSum(numbers){
    let newArr = []
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
      newArr.push(Math.pow(numbers[i], 2))
    }
    for(let j = 0; j < numbers.length; j++) {
      sum += newArr[j]
    }
    return sum
  }