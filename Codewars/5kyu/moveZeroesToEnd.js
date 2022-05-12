// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

function moveZeros(arr) {
    // filter out every zero in the array, then grab them and concat them to the very end
    return arr.filter(x => x !== 0).concat(arr.filter(x => x === 0))
  }
