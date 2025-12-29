var str = "hi i am gautham i am working on a project"
var words = str.split(' ')

wordCount = {}
for( let w of words){
    if (w in wordCount){
        wordCount[w]+=1
    }
    else{
        wordCount[w]=1
    }
}
console.log(wordCount);
