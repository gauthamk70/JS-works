// ⿢ Write a program to count the number of vowels and consonants in a string.

var str = "  AAa Bbbb @#$  "

var strCleaned= str.trim().toLowerCase()
var vowels= "aeiou"
var vCount = 0
var cCount = 0

for(let ch of strCleaned){
    if(vowels.includes(ch)){
        vCount++
    }
    else if(ch>="a"&&ch<="z"){
        cCount++
    }
}
console.log("number of vowels:",vCount);
console.log("number of constanents:",cCount);

