var str = "aaa bb"
var vCount = 0
var cCount = 0

for(var ch of str){
    if(ch=="a"||ch=="e"||ch=="i"||ch=="o"||ch=="u"){
        vCount++
    }
    else if(ch!=" "){
        cCount++
    }
}
console.log("number of vowels:",vCount);
console.log("number of constanents:",cCount);
