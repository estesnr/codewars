# Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

def reverse_words(text):
  # split string into a list
    text = text.split(' ')
    # reverse each element in the list
    new_text = [word[::-1] for word in text]
    # return the reversed list joined back into a string
    return " ".join(new_text)