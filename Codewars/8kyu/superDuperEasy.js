// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

function problem(x){
  // ternary operator, compares input to see if it's a string. If truthy, return "Error". If falsey, return the equation's result
  return x === x.toString() ? "Error" : x * 50 + 6
}
