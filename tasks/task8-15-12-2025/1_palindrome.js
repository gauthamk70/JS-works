// ⿡ Write a JavaScript program to check whether a given string is a palindrome.

var str = "malayalam"

var reverse=""

for(let i=str.length-1; i>=0; i--){
    let ch = str[i]
    reverse+=ch
}
console.log(str==reverse?"palindrome":"not palindrome");

