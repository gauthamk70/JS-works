
// ⿤ Write a function that reverses a given string (without using built-in reverse).
// Input: "hello" → Output: "olleh"

function reverse(str) {
    let reverseString = ""
    for (let i = str.length - 1; i >= 0; i--) {
        reverseString += str[i]
    }
    return reverseString
}

console.log(reverse("hello"));
