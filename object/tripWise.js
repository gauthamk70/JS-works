// tripwise

var expense = {
    jazeel: 780,
    nazim: 680,
    arun: 1000,
    thurasr: 1500,
    mahin: 500,
    amal: 750
}
// total expence

var total = 0
for (let key in expense) {
    total += expense[key]
}
console.log("Total Expense: ", total);

// who paid most

var higehst = 0
for (let key in expense) {
    if (expense[key] > higehst) {
        higehst = expense[key]
    }
}
console.log(higehst);

for (let key in expense) {
    if (expense[key] == higehst) {
        console.log(key, expense[key]);
    }
}

// split
var split = total / Object.entries(expense).length
console.log(split);

console.log(Object.entries(expense));  // methord to convert object to arrays

// 

var splitWise = {}

for (let user in expense) {
    let amount = expense[user]
    splitWise[user]=split-amount

}
console.log(splitWise);
