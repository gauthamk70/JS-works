function isPalindrome(str){
    let strCleaned= str.toLowerCase().replaceAll(" ","")
    let strReversed = ""
    for(let i=strCleaned.length-1; i>=0; i--){
        strReversed+=strCleaned[i]
         }
    return strReversed==strCleaned
}

console.log(isPalindrome("A man a plan a canal Panama"));
