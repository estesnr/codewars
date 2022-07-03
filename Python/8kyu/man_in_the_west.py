# A western man is trying to find gold in a river. To do that, he passes a bucket through the river's soil and then checks if it contains any gold. 
# However, he could be more productive if he wrote an algorithm to do the job for him.

# So, you need to check if there is gold in the bucket, and if so, return True/true. If not, return False/false.

def check_the_bucket(bucket):
    # set the default value of true
    gold = False
    # loop through values of bucket list
    for rock in bucket:
        # if gold is detected:
        if rock == "gold":
            # change gold value to true
            gold = True
    # return the final value
    return gold
  
  # OR
  
    return "gold" in bucket
