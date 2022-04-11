function digitize(n) {
    //code here
    let arr = n.toString().split('').reverse()
    let newArr = arr.map(str => {
                        return Number(str);})
    return newArr
  }