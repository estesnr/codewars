function generateShape(integer){
    let row = ""
    for(let i = 0; i < integer; i++) {
      row += "+"
      }
      return ((`${row}\n`).repeat(integer - 1) + (row))
  }