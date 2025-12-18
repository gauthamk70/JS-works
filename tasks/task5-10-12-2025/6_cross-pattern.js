// 6. Cross Pattern
// 0 0 1 0 0
// 0 0 1 0 0
// 1 1 1 1 1
// 0 0 1 0 0
// 0 0 1 0 0
var n=5

for (let r = 1; r <= n; r++) {
    let pattern = ""
    for (let c=1; c<=n; c++){
        if(n%2==1){
            let mid = Math.floor(n/2)+1
            r==(mid)||c==(mid)?pattern+="1 ":pattern+="0 "
        }
        else if(n%2==0){
            let [a,b] = [n/2 , n/2+1]
            r==a||r==b||c==a||c==b?pattern+="1 ":pattern+="0 "
             
        }
    }
    console.log(pattern);
    
}
