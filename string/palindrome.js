function isPalindrome(text) {
    let isPWord = true
    let reverse = ""
    for (let i = text.length - 1; i >= 0; i--) {
        reverse += text[i]
    }
    reverse == text ? isPWord = true : isPWord = false
    return isPWord
}
console.log(isPalindrome('malayalam'));
