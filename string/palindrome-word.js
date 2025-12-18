function ispalindromeWord(word) {

    let wordCleaned = word.replaceAll(" ", "").toLowerCase()
    let reverse = ""
    for (let i = wordCleaned.length - 1; i >= 0; i--) {
        reverse += wordCleaned[i]
    }
    return wordCleaned == reverse

}

console.log(ispalindromeWord("A man A Plan a Canal Panama"));
