var limit = 4
var previous = 0
var current = 1

console.log(previous);
console.log(current);


for(let i = 1 ;i<=limit-2;i++){
    let next=previous+current
    console.log(next);
    previous=current
    current=next
    
}