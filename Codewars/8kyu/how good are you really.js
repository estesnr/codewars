function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    let classAv = classPoints.reduce((x, y) => x + y, 0) / classPoints.length
    if(classAv > yourPoints) {
      return false;
    }
    else if(classAv < yourPoints) {
      return true
    }
  }
  