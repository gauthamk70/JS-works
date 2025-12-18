var word1 = "aab"
var word2 = "abb"
var isAnagram = true
if(word1.length!=word2.length){
    isAnagram=false
}
for(let ch of word2){
    if(word1.indexOf(ch)==-1){
        isAnagram = false
        break
    }
   
    
}
 console.log(isAnagram);
