function getEvenNumbers(numbersArray){
    // filter out the odd numbers
    return numbersArray.filter(x => {
      return x % 2 ==0
    })
  }