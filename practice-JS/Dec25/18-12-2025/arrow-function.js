var add = (n1,n2)=>n1+n2
console.log(add(100,200));

var isPrime = (n)=>{
    let prime=true
    for(let i = 2;i<n ;i++){
        if(n%i==0){
            prime=false
            break
        }
    }
    return prime
}

console.log(isPrime(7));

