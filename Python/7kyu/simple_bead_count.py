# Two red beads are placed between every two blue beads. There are N blue beads. After looking at the arrangement below work out the number of red beads.

# B RR B RR B RR B RR B

def count_red_beads(n): 
    number = (n * 2) - 2
    if number < 0:
        return 0
    else:
        return number
