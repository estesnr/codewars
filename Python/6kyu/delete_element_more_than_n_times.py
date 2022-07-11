# Enough is enough!

# Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, 
# Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.

# He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. 
# Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

def delete_nth(order,max_e):
    # create empty list to put values into
    new_arr = []
    # loop through the input list
    for x in order:
        # count if the element is in the new array more than the alloted times
        if new_arr.count(x) >= max_e:
            # if it is, skip it over
            continue
        # if it's not, put it into the new list
        else:
            new_arr.append(x)
    # return the final value
    return new_arr
        
            
