function isPalindrome(x) {
    // your code here
    let revString = x.split("").reverse().join("")
    
    if(x.toLowerCase() == revString.toLowerCase()) {
       return true
        }
     else {
       return false
     }
  }