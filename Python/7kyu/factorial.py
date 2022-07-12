# Your task is to write function factorial.

from math import factorial

# OR

def factorial(n):
    second = 1
    for x in range(1, n):
        second *= x
    if n == 0:
        return 1
    else: 
        return n * second
