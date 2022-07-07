# You have to write a calculator that receives strings for input. The dots will represent the number in the equation. There will be dots on one side, 
# an operator, and dots again after the operator. The dots and the operator will be separated by one space.

# Here are the following valid operators :

#     + Addition
#     - Subtraction
#     * Multiplication
#     // Integer Division

def calculator(txt):
    # establish variables for the answer in int form and string form
    answer = 0
    dot_answer = ""
    # split the input string into a list of values
    equation = txt.split(' ')
    # assign variables for the operator and each number by counting the dots
    equation1 = equation[0].count(".")
    equation2 = equation[2].count('.')
    oper = equation[1]
    
    # cycle through different operators to find the proper equation
    if oper == "+":
        answer = int(equation1 + equation2)
    elif oper == "-":
        answer = int(equation1 - equation2)
    elif oper == "*":
        answer = int(equation1 * equation2)
    elif oper == "//":
        answer = int(equation1 / equation2)
     
    # use the value from the answer variable to add dots to the answer string
    dot_answer += "." * answer
    # return the final answer string
    return dot_answer
    
