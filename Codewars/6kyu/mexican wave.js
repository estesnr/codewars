function wave(str){
    // Code here
    let arr = []
    let captial;
    for(let i = 0; i < str.length; i++) {
      let letter = str[i];
      if(letter === " ") {
        continue
      }
      else {
        let capital = str[i].toUpperCase();
        arr.push(str.slice(0, i) + capital + str.slice(i + 1))
      }
      
    } return arr
  }