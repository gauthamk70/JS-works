
// 1. Print Table of Sums

// Using nested loops, print sums of pairs:

// 1+1=2  1+2=3  1+3=4
// 2+1=3  2+2=4  2+3=5
// 3+1=2  3+2=4  3+3=6

for(let r=1; r<=3; r++){
    let pattern=""
    for(let c=1; c<=3; c++){
        pattern+=`${r}+${c}=${r+c} `

    }
    console.log(pattern);
    
}