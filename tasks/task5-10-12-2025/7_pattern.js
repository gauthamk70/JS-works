// 7. Print:

// 1 A A A
// 1 1 A A
// 1 1 1 A
// 1 1 1 1

for(let r=1; r<=4; r++){
    let pattern=""
    for(let c=1; c<=4; c++){
        r>=c?pattern+="1 ":pattern+="A "
    }
    console.log(pattern);
    
}
