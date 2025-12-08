
var text = "aaa bb"
var vcount = 0
var cCount = 0

for (let ch of text) {
    if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u") {
        vcount++

    }
    else if (ch !=" ") {
        cCount++
    }
}
console.log("Vowels", vcount);
console.log("Constanets", cCount);

