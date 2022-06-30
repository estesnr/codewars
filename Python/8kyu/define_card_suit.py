# You get any card as an argument. Your task is to return the suit of this card (in lowercase).

def define_suit(card):
    # search a negative index to account for 10s
    if card[-1] == "C":
        return 'clubs'
    elif card[-1] == "D":
        return 'diamonds'
    elif card[-1] == 'H':
        return 'hearts'
    else:
        return 'spades'
