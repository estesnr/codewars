function rpsls(pl1,pl2){
    //Your Magnificent Code here
      if((pl1 == "rock" && pl2 == "lizard") || (pl1 == "paper" && pl2 == "rock") || (pl1 == "scissors" && pl2 == "lizard") || (pl1 == "lizard" && pl2 == "paper") || (pl1 == "spock" && pl2 == "rock") || 
         (pl1 == "lizard" && pl2 == "spock") || (pl1 == "scissors" && pl2 == "paper") || (pl1 == "paper" && pl2 == "spock") || (pl1 == "spock" && pl2 == "scissors") || (pl1 == "rock" && pl2 == "scissors")) {
        return "Player 1 Won!"
      }
      else if (pl1 == pl2) {
        return "Draw!"
      }
      else {
        return "Player 2 Won!"
      }
    
     }