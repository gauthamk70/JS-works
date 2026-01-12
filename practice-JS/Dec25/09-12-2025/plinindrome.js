var text = "malayalam"
var reverse = ""
// var palindrome = false
for(let i=text.length-1;i>=0;i--){
    reverse=reverse+text[i]
    text==reverse?palindrome=true:palindrome=false
}
console.log(text==reverse?"palindrome":"not palindrome");
