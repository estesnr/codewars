// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x){
  let newArr = x.split(" ")
    
  const getScore = (word) => {
    return word.split('').reduce((prevScore, currWord) => 
           prevScore + currWord.charCodeAt(0) - 96, 0)
  }
  
  const scoresArr = newArr.map(word => getScore(word))
  
  let highInd = 0
  let highScr = 0
  
  scoresArr.forEach((score, i) => {
    if(score > highScr) {
      highInd = i
      highScr = score
    }
  })
  
  return newArr[highInd]
  }
