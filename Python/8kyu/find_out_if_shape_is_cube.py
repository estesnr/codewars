# To find the volume (centimeters cubed) of a cuboid you use the formula:

# volume = Length * Width * Height

# But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!

# It's up to you to find out whether the cuboid has equal sides (= is a cube).

# Return true if the cuboid could have equal sides, return false otherwise.

# Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

def cube_checker(volume, side):
    # check for negative side value
    if side > 0:
        # compare volume total to the side cubed, return true if they match, false if they don't
        return volume == (side ** 3)
    # return false if side value is negative
    else:
        return False
