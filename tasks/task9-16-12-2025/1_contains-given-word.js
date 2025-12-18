//  Write a JavaScript program to check whether a string contains a given word, ignoring case.

function includesWord(word,str){
    if(str.toLowerCase().includes(word.toLowerCase())){
        return true
    }
    else{
        return false
    }
}
console.log(includesWord("Name","hi my name is bane"));
