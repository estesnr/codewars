// Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is 
// always a non empty string, no need to verify it.

// Examples
// remove("Hi!") === "Hi!"
// remove("Hi!!!") === "Hi!"
// remove("!Hi") === "Hi!"
// remove("!Hi!") === "Hi!"
// remove("Hi! Hi!") === "Hi Hi!"
// remove("Hi") === "Hi!"

function remove (string) {
  // remove all instances of "!" from the string, then concat one ! at the end
  string = string.replace(/!/gi, "") + "!"
  return string
}
