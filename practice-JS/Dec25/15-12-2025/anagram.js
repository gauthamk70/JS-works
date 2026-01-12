function isAnagram(word1,word2){
    let anagram = true
    if(word1.length!=word2.length){
        anagram=false
    }
    
    for(let ch of word2){
        if(word1.indexOf(ch)==-1){
            anagram=false
            break
        }   
    }
    return anagram
}

console.log(isAnagram("aab","abb"));
