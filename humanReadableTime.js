// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

//     HH = hours, padded to 2 digits, range: 00 - 99
//     MM = minutes, padded to 2 digits, range: 00 - 59
//     SS = seconds, padded to 2 digits, range: 00 - 59

// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

// solutions works, but needs to be optimized.
function humanReadable (seconds) {
  let secs = 0;
  let mins = 0;
  let hrs = 0;
  for(let i = 0; i <= seconds; i++) {
    seconds++
    if(secs = 60) {
      secs = 0
      mins++
    }
    if(mins = 60) {
      mins = 0
      hrs++
    }
  }
  let string = `${hrs.toString().padStart(2, 0)}:${mins.toString().padStart(2, 0)}:${secs.toString().padStart(2, 0)}`
  return string
}
