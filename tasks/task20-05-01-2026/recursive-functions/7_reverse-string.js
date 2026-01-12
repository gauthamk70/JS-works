// JS Recursion Task: 7_reverse-string.js

// Write a recursive function to reverse a string.

function reverseString(str) {
    if (str == "") {
        return ""; // base case: empty string
    }
    return reverseString(str.slice(1)) + str[0]; // recursive step
}

console.log(reverseString("hello")); // Output: "olleh"



