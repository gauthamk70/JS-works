// 9. Reverse a string without using array

// Input: "JAVASCRIPT"
// Use a for loop that iterates from end to start to print the reversed string.

var str = "javascript"
var reversed = ""

for (let i = str.length - 1; i >= 0; i--) {
    
    reversed=reversed+str[i]


}
console.log(reversed);
