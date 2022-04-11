function sentencify(words) {
    // TODO: Write your solution here!
    let newArr = words.join(" ") + "."
    return newArr[0].toUpperCase() + newArr.slice(1)
  }