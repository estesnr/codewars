var capitals = function (word) {
    // Write your code here
    let chars = [];
    for(let i = 0; i < word.length; i++) {
      if(word.charAt(i) === word.charAt(i).toUpperCase()) {
        chars.push(i)
      }
      
    } return chars
  };