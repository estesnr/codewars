function XO(str) {
    //code here
  let countX=0;
  let countO=0;
  for(let i=0;i<str.length;i++){
    if(str[i]=="x"|| str[i]=="X")
      countX++;
    
    if(str[i]=="o"|| str[i]=="O")
      countO++;
  }if(countX==countO)
    return true
  else return false
  }