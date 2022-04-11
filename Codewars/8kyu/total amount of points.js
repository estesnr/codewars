function points(games) {
    let i = 0
    let points = 0
    
    for(i; i < games.length; i++){
      let teams = games[i].split(":")
      if(teams[0] > teams[1]){
        points += 3;
      }
      else if(teams[0] == teams[1]){
        points +=1;
      }
      
    }
    return points
  }