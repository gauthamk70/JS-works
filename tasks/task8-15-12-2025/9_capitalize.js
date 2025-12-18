// ⿩ Write a JavaScript program to capitalize the first letter of each word in a sentence.

function capitalize(str){
    let wordsArray= str.split(' ')
    for(let i=0; i<wordsArray.length; i++){
        wordsArray[i]=wordsArray[i][0].toUpperCase() + wordsArray[i].slice(1)
    }
    let newStr=wordsArray.join(' ')
    return newStr
}
console.log(capitalize("hi i am bane"));

