
var arr = [-1,0,-1,0,0,-1,0,0,-1]
// op = [-1,-1,-1,-1,0,0,0,0,0]

var output = []
for(let n of arr){
    if(n==-1){
        output.unshift(-1)
    }
    else{
        output.push(0)
    }
}
console.log(output);
