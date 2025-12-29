// Given an array of strings, display the string with the maximum length.
var words = ["i", "love", "programming"]

var length = 0
var longestWord = words[0]
for (let w of words) {
    if (w.length > length) {
        longestWord = w
    }
}
console.log(longestWord);
