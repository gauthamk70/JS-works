
//  Write a program to reverse each word in a string (keep word order same).

function reverseString(str) {

    var wordsArray = str.split(" ")
    for (let word =0;word< wordsArray.length;word++) {
        let currentWord = wordsArray[word]
        let reversed = ""
        for (let i = currentWord.length - 1; i >= 0; i--) {
            reversed += currentWord[i]

        }
        wordsArray[word]=reversed

    }
    var stringReversed = wordsArray.join(" ")
    return stringReversed

}
console.log(reverseString("my name is gautham"));
