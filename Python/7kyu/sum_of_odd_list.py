# Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined/None/nil/NULL 
# if any of the values aren't numbers.

# Note: Booleans should not be considered as numbers.

def cube_odd(arr):
    # establish sum variable
    sum = 0
    # loop through list
    for x in arr:
        # check if each item is an integer
        if type(x) == int:
            # check for odd
            if x % 2 != 0:
                # cube the integer, then add it's value to sum
                sum += x ** 3
        # if any non-integers are detected, return "None"
        else:
            return None
    # finally, return the sum
    return sum
