// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.

// For example:

// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
// checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
// checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0

function checkExam(array1, array2) {
 // create a variable to store the test score
  let finScore = 0
  // for loop to go through all of the values in each array
  for(let i = 0; i < array1.length; i++) {
    // compare the correct answers against the submitted answers and adjust score appropriately
    array1[i] === array2[i] ? finScore +=4 
    : array2[i] === "" ? finScore += 0
    : finScore -= 1
}
  // return the final score, or 0 if the final score is lower than 0
  return finScore > 0 ? finScore : 0
    }
