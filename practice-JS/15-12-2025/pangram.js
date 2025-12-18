// The quick brown fox jumps over the lazy dog

function isPangram(str) {
    let panagram = true
    let alphabets = "abcdefghijklmnopqrstuvwxyz"
    for (let ch of alphabets) {
        if (str.indexOf(ch) == -1) {
            panagram = false
            break
        }
    }
    return panagram

}

console.log(isPangram('The quick brown fox jumps over the lazy dog'));
