const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // TODO
    return mpg * fuelLeft >= distanceToPump
    if(zeroFuel > 1) {
      return true;
    }
    else {
      return false;
    }
  };

// or

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return mpg * fuelLeft >= distanceToPump;
    
    return zeroFuel > 1 ? true : false
}
