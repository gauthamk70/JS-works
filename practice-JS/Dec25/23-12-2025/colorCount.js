var colors = ["red","green","red","blue","red","blue","black"]

var colorCount = {}

for(let c of colors){
    if(c in colorCount){
        colorCount[c]+=1
    }
    else{
        colorCount[c]=1
    }
}
console.log(colorCount);
