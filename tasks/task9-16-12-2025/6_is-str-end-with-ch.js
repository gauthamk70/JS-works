// Write a program to check whether a string ends with a specific character or word.



function isEndingWith(word,str){
    let wordArray= str.split(' ')
    let lastIndex = wordArray.indexOf(word)
    return lastIndex==wordArray.length-1
}
console.log(isEndingWith("over","this is not over"));




