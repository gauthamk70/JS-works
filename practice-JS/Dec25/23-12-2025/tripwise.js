var expense = {
    jazeel: 780,
    nazim: 680,
    arun: 1000,
    thurasr: 1500,
    mahin: 500,
    amal: 750
}
// total amount
var total =0
for(let k in expense){
    total+=expense[k]

}
console.log(total);


// who paid most
var higehst = 0
for(let k in expense){
    if(expense[k]>higehst){
        higehst=expense[k]
    }
}
console.log(higehst);
for(let k in expense){
    if(expense[k]==higehst){
        console.log(k,expense[k]);
        
    }
}

// split
var split = total/Object.entries(expense).length
console.log(split);

// splitwise

var splitWise = {}
for(let user in expense){
    let amount = expense[user]
    splitWise[user]=split-amount
}
console.log(splitWise);
