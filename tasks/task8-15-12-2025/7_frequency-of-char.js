// ⿧ Write a JavaScript program to count the frequency of a given character in a string.

function frequencyOfChar(ch, str) {
    let chCount = 0
    for (let i = 0; i < str.length; i++) {
        if (ch == str[i]) {
            chCount++
        }
    }
    return chCount
}

console.log(frequencyOfChar("a", "gautham"));
