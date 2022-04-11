function automorphic(n){
    let square = (n * n).toString();
    if(square.endsWith(n)) {
      return "Automorphic"
    }
    else {
      return "Not!!"
    }
  }