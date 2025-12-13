// 1 0 0 0
// 0 1 0 0
// 0 0 1 0
// 0 0 0 1
var squareLength = 8
for(let r = 1; r<=squareLength; r++){
    let pattern =""
    for (let c=1; c<=squareLength; c++){
        r==c?pattern+="1 ":pattern+="0 "
    }
    console.log(pattern);
    
}