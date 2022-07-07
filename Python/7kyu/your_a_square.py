# Task

# Given an integral number, determine if it's a square number:

def is_square(n):
    # check for positive input
    if n < 0:
        return False
    # check for perfect square
    else:
        return (n ** (1/2)) % 1 == 0
