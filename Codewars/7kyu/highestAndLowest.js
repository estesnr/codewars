// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// Examples

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// Notes

//     All numbers are valid Int32, no need to validate them.
//     There will always be at least one number in the input string.
//     Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers){
  // split the input into an array of values
  numbers = numbers.split(" ")
  // establish 2 variables at infinite values to compare against input values
  let highest = -Infinity
  let lowest = Infinity
  // start a for loop to evaluate integers
  for(let i = 0; i < numbers.length; i++) {
    // evaluate if the input value is less than "lowest", then write it to the "lowest" variable
    if(+numbers[i] < lowest) {
      lowest = +numbers[i]
    }
    // do the same, but for the "highest" variable
    if(+numbers[i] > highest) {
      highest = +numbers[i]
    }
    }
  // return a string literal of the two values
   return `${highest} ${lowest}`
  }

// OR 

function highAndLow(numbers){
  // split the input into an array of values
  let arr = numbers.split(' ')
  // return the values using the "max" and "min" methods.
  return `${Math.max(...arr)} ${Math.min(...arr)}`
}
