function stringy(size) {
    // your code here 
    let numStr = ""
    for(let i = 0; i < size; i++) {
      numStr += "10"
    }
    return numStr.slice(0, size)
  }