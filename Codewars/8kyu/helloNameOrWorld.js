// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// Examples:

// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given 
//   or `name` = ""        => return "Hello, World!"

function hello(name) {
  // check for no input
  if(!name) {
    // return "Hello, World!" if there's no input
    return "Hello, World!"
  }
  // if there is an input
  else {
  // convert the input into a lowercase string, then split into an array
  name = name.toLowerCase().split('')
  // capitalize the first character
  name[0] = name[0].toUpperCase()
  // join it back to a single string
  name = name.join('')
  // string literal returning "hello" and the name
  return `Hello, ${name}!`
}
  }
