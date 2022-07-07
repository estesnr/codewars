# Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups 
# are space-separated (see sample below)

def sort_my_string(s):
    arr1 = []
    arr2 = [" "]
    for x in range(0, len(s)):
        if x % 2 == 0:
            arr1.append(s[x])
        else:
            arr2.append(s[x])
    arr3 = arr1 + arr2
    return ''.join(arr3)
