function moveZeros(arr) {
    // filter out every zero in the array, then grab them and concat them to the very end
    return arr.filter(x => x !== 0).concat(arr.filter(x => x === 0))
  }