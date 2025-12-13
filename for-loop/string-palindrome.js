
var text = "malayalam"
          //012345678  
var textLength = text.length-1

// console.log(textLength);

var result = ""

for(let i = textLength ; i>=0 ; i--){
    result = result + text[i]
  
}

console.log(text==result?"palindrome":"not a palindrome");

