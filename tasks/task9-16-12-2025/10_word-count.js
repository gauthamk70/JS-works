
// Write a program to count how many times a specific word appears in a sentence.

function wordCount(word, str) {
    let wordsArray = str.split(' ')
    let count = 0
    for (let i = 0; i < wordsArray.length; i++) {
        if (wordsArray[i] == word) {
            count++
        }
    }
    return count
}

console.log(wordCount("the","konaha is the birth place of the 7th hokage."));


