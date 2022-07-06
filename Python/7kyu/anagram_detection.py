# An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

# Note: anagrams are case insensitive

# Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

def is_anagram(test, original):
    # first, eliminate easy ones by checking is the lengths of the two strings are the same
    if len(test) == len(original):
        # change each string to lowercase and sort the characters
        test_sort = sorted(test.lower())
        original_sort = sorted(original.lower())
        # compare each sorted variable
        if test_sort == original_sort:
            return True
        else:
            return False
    else:
        return False
