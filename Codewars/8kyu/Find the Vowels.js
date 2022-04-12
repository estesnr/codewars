function vowelIndices(word){
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y']
    let result = [];
    [...word.toLowerCase()].forEach((char, index) => {
      if(vowels.includes(char)) {
        result.push(index + 1)
      }
    }) 
    
    return result
    
    }