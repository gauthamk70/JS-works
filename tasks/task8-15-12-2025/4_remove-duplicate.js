// ⿤ Write a program to remove duplicate characters from a string.

function removeDuplicate(str){
    let strRemoved = ""
    let letters = str.split("")
    for(let i=0; i<=letters.length-1; i++){
        if(!strRemoved.includes(letters[i])){
            strRemoved+=letters[i]
        }
    }
    return strRemoved
}
console.log(removeDuplicate('aaa bbb cccdd'));
