// 9. Print:

// A A A A
// B B B B
// C C C C
// D D D D
var n = 7
for(let r=1; r<=n;r++){
    let pattern=""
    for(let c=1;c<=n; c++){
        pattern+=String.fromCharCode(64+r)+" "
    }
    console.log(pattern);
    
}