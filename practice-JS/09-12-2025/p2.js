// O E O E
// O E O E
// O E O E

for(let r=1; r<=3; r++){
    let pattern=""
    for(let c=1; c<=4; c++){
        c%2==0?pattern+="E ":pattern+="O "
    }
    console.log(pattern);
    
}