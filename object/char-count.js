var word = "javascript"
var char = word.split('')

var charCount = {}
for (let c of char) {
    if (c in charCount) {
        charCount[c] += 1
    }
    else {
        charCount[c] = 1
    }
}
console.log(charCount);
