function noOdds( values ){
    // Return all non-odd values
    function isEven(nums) {
      return (nums % 2 === 0);
    }
    return values.filter(isEven)
  }