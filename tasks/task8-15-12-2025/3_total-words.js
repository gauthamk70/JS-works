// ⿣ Write a JavaScript program to find the total number of words in a sentence.

function totalWords(str){
    let words= str.split(' ')
    return words.length
}
console.log(totalWords("hi i am gautham"));
