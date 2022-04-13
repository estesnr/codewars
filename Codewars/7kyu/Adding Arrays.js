function arrAdder(arr) {
    var phrase = "";
    for(var i = 0; i < arr[0].length; i++){
      for(var j = 0; j < arr.length; j++){
        phrase += arr[j][i];
      }
      phrase += " ";
    }
    return phrase.trim();
  }
    