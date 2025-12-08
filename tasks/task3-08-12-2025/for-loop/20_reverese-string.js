
// 20. Reverse a string using a for loop

// Input: "HELLO"
// Output: "OLLEH"
// (Do this using a backward for loop.) 

var str = "hello"
var length = str.length
// console.log(length);
var reverse = ""

for(let i=length-1 ; i>=0 ; i--){
    reverse=reverse+str[i]
}
console.log(reverse);
