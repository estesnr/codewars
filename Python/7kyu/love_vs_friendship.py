# If　a = 1, b = 2, c = 3 ... z = 26

# Then l + o + v + e = 54

# and f + r + i + e + n + d + s + h + i + p = 108

# So friendship is twice stronger than love :-)

# The input will always be in lowercase and never be empty.

def words_to_marks(s):
    score = 0
    arr = " ".join(s).split(' ')
    alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    for x in range(0, len(arr)):
        for y in range(0, len(alphabet)):
            if arr[x] == alphabet[y]:
                score += y + 1
    return score
                
