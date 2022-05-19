// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
  // use the replace method with a global variable to replace all instances of "!" with nothing
  return s.replace(/!/gi, '');
}
