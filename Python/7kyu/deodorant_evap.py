# This program tests the life of an evaporator containing a gas.

# We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) 
# in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.

# The program reports the nth day (as an integer) on which the evaporator will be out of use.
# Example:

# evaporator(10, 10, 5) -> 29

def evaporator(content, evap_per_day, threshold):
    # establish a counter variable
    count = 0
    # determine the final threshold value
    drop_val = content * (threshold / 100)
    # while loop to continously reduce the content value day by day
    while content > drop_val:
        # add to the counter
        count += 1
        # reduce the content value by the given percentage
        content = content - (content * (evap_per_day / 100))
    # return the final value
    return count
   
    
