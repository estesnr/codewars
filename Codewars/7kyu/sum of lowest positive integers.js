function sumTwoSmallestNumbers(numbers) {  
    //Code here
    let newArr = numbers.sort((a,b) => a-b);
    let finalArr = newArr.slice(0, 2);
    
    let sum = finalArr[0] + finalArr[1];
    
    return sum;
    
    }