
var text = "hello world"
var count = 0

for (let ch of text) {
    if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u") {
        count++
    }
}
console.log(count);

