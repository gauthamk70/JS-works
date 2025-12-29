var text = "JavaScript is the lively heartbeat of the web, frontends with frameworks like React, ruling backends with Node.js, and even strolling into mobile apps and servers. It blends flexibility with chaos, freedom with quirks, and somehow, it all works beautifully when handled with a bit of care and curiosity."
var words = text.split(' ')

var wordCount = {}

for(let w of words){
    if(w in wordCount){
        wordCount[w]+=1
    }
    else{
        wordCount[w]=1
    }
}
console.log(wordCount);


