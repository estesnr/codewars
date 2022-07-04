# Find the mean (average) of a list of numbers in an array.

# Information
# To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

def find_average(nums):
    #your code here
    sum = 0
    for num in nums:
        sum += num
    if nums == []: 
        return 0
    else: 
        return sum / len(nums)
