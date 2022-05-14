// Story
// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, 
// this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. 
// Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

// Examples
// minMax([1,2,3,4,5])   == [1,5]
// minMax([2334454,5])   == [5, 2334454]
// minMax([1])           == [1, 1]
// Remarks
// All arrays or lists will always have at least one element, so you don't need to check the length. 
// Also, your function will always get an array or a list, you don't have to check for null, undefined 
// or similar.

function minMax(arr){
    // establish two variables at both positive and negative infinity to cover our bases for all cases
    let max = -Infinity
    let min = Infinity
    // create a new array to plug our values into
    let newArr = []
    // for loop, to find out what our new values should be
    for(let i = 0; i < arr.length; i++) {
        // check the values of the array for the largest, comparing all of our numbers against -Infinity
      if(arr[i] > max) {
        max = arr[i];
      }
      // doing the same, but for positive infinity
      if(arr[i] < min) {
        min = arr[i]
      }
      
      }
    // pushing those new values into our empty array
    newArr.push(min)
    newArr.push(max)
    // returning our final solution
    return newArr
