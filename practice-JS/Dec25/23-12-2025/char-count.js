var str = "javascript"
var char = str.split('')
charCount = {}

for(let c of char){
    if(c in charCount){
      charCount[c]+=1
    }
    else{
        charCount[c]=1
    }
}
console.log(charCount);
