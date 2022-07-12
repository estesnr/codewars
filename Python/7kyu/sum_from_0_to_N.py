# We want to generate a function that computes the series starting from 0 and ending until the given number.

def show_sequence(n):
    sum = 0
    string = ""
    for x in range(0, n + 1):
        sum += x
        string += f"{x}+"
        
    if sum > 0:
        return f"{string[:-1]} = {sum}"
    elif n == 0:
        return '0=0'
    elif n < 0:
        return f"{n}<0"
