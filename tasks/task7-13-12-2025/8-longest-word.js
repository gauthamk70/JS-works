// ⿨ Write a function that accepts a sentence and returns the longest word.
// Input: "I love programming" → Output: "programming"

function longestWord(str) {
    let words = str.split(' ')
    let longest = ""
    for (let word of words) {
        if (word.length > longest.length) {
            longest = word
        }

    }
    return longest

}
console.log(longestWord('i love programming'));




