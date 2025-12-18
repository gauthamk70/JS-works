
var expenses = [200, 210, 230, 152, 172, 652, 155, 756, 623, 654, 134]
//                0  1   2   3   4   5   6   7   8   9   10

// display all expenses

console.log("itrating arreay using index");

for (let i = 0; i < expenses.length; i++) {
    console.log(expenses[i]);
}

console.log("itrating using of");

for (let e of expenses) {
    console.log(e);
}

// total expense

var total = 0
for (let e of expenses) {
    total += e
}
console.log("total expenses: ", total);

// highest expense

var maxExp= 0

for(let e of expenses){
    if(e>maxExp){
        maxExp=e
    }
}
console.log("Highest expence: ",maxExp);

// lowest expence

var minExpence = expenses[0]
for(let e of expenses){
    if(e<minExpence){
      minExpence=e
    }
}
console.log("lowest expense: ",minExpence);

