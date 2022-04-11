var greet = function(name) {
    let result = name.charAt(0).toUpperCase() + 
        name.slice(1).toLowerCase();
    
    return "Hello " + result + "!";
  };