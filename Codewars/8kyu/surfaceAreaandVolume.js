// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

function getSize(width, height, depth) {
  // calculate volume of the box
  let volume = width * height * depth
  // calculate surface area of the box
  let area = (2 * width * height) + (2 * height * depth) + (2 * depth * width)
  // return the array
  return [area, volume]
      }
