// 8. Print:

// A B C D
// A B C D
// A B C D
// A B C D
var n=7
for(let r =1; r<=n;r++){
    let pattern=""
    for(let c=1; c<=n; c++){
        pattern+=String.fromCharCode(64+c)+" "

    }
    console.log(pattern);
    
}
