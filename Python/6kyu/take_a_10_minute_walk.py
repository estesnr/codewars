# You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an 
# appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

#     Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). 
#     It will never give you an empty array (that's not a walk, that's standing still!).

def is_valid_walk(walk):
    # create a sum variable for later
    sum = 0
    # check that the length is 10, anything else wouldn't take 10 minutes
    if len(walk) != 10:
        return False
    else:
        # loop through the list, and change the direction values to numbers, with opposite directions cancelling each other out
        for x in range(0, len(walk)):
            if walk[x] == 'n':
                walk[x] = 1
            elif walk[x] == 's':
                walk[x] = -1
            elif walk[x] == 'w':
                walk[x] = 2
            else: 
                walk[x] = -2
        # add all of the values into the sum variable
        for y in walk:
            sum += y
        # if the sum = 0, then you wind up back where you started and are on time
        if sum == 0:
            return True
        else:
            return False
                
