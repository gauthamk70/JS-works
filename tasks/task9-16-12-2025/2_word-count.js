// Write a program to count the number of words in a string using string methods.

function wordCount(str){
    let words = str.split(' ')
    let count = 0
    for(let i=0; i<words.length;i++){
        count++
    }
    return count
}
console.log(wordCount("hi my name is gautham"));
