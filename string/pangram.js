function isPangram(str) {

    var isPanagram = true
    var alphabets = "abcdefghijklmnopqrstuvwxyz"
    for (let ch of alphabets) {
        if (str.indexOf(ch) == -1) {
            isPanagram = false
            break
        }
    }
    return isPanagram
}
console.log(isPangram('the quick brown fox jumps over the lazy dog'));
