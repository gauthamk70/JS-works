// JS Recursion Task: 9_palindrome-check.js
// Write a recursive function to check whether a string is a palindrome.
function isPalindrome(str) {
    if (str.length <= 1) return true
    else if (str[0] !== str[str.length - 1]) return false
    return isPalindrome(str.slice(1, -1))
}
console.log(isPalindrome('malayalam'));


