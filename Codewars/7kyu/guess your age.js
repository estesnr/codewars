function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    // your code
    let arr = [age1, age2, age3, age4, age5, age6, age7, age8]
    
    let square = Math.hypot(...arr)
    let final = Math.floor(square / 2)
    return final
  }