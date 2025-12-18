// Write a JavaScript program to replace all vowels with * in a string.

function replaceVowels(str) {
    let vowels = 'aeiou'
    
    let newwStr = ""
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            newwStr += "*"

        }
        else {
            newwStr += str[i]
        }
    }
    return newwStr

}
console.log(replaceVowels("gautham"));
