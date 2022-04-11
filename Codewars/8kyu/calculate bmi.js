function bmi(weight, height) {
    let bmI = weight / Math.pow(height, 2);
    if(bmI <= 18.5) {
      return "Underweight"
    }
    else if (bmI <= 25.0) {
      return "Normal"
    }
    else if (bmI <= 30.0) {
      return "Overweight"
    }
    else if (bmI > 30) {
      return "Obese"
    }
  }