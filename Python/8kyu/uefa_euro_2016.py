# Finish the uefaEuro2016() function so it return string just like in the examples below:

# uefa_euro_2016(['Germany', 'Ukraine'],[2, 0]) # "At match Germany - Ukraine, Germany won!"
# uefa_euro_2016(['Belgium', 'Italy'],[0, 2]) # "At match Belgium - Italy, Italy won!"
# uefa_euro_2016(['Portugal', 'Iceland'],[1, 1]) # "At match Portugal - teams played draw."



def uefa_euro_2016(teams, scores):
    if scores[0] > scores[1]: 
       winner = f"{teams[0]} won!"
    elif scores[0] < scores[1]:
        winner = f"{teams[1]} won!"
    else:
        winner = 'teams played draw.'
    return f"At match {teams[0]} - {teams[1]}, {winner}"

