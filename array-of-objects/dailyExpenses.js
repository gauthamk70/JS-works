var expenses = [
    { id: 1, title: "Dosa and Tea", amount: 40, category: "food", owner: "jazeel", payment_method: "upi", priority: "need" },
    { id: 2, title: "Bus Fare", amount: 25, category: "transport", owner: "jazeel", payment_method: "cash", priority: "need" },
    { id: 3, title: "Mobile Recharge", amount: 299, category: "utilities", owner: "jazeel", payment_method: "upi", priority: "need" },
    { id: 4, title: "Movie Ticket", amount: 150, category: "entertainment", owner: "jazeel", payment_method: "card", priority: "want" },
    { id: 5, title: "Snacks", amount: 60, category: "food", owner: "jazeel", payment_method: "cash", priority: "want" },
    { id: 6, title: "Gym Membership", amount: 1200, category: "health", owner: "sarah", payment_method: "upi", priority: "need" },
    { id: 7, title: "Coffee", amount: 120, category: "food", owner: "sarah", payment_method: "card", priority: "want" },
    { id: 8, title: "Books", amount: 450, category: "education", owner: "sarah", payment_method: "upi", priority: "need" },
    { id: 9, title: "Uber Ride", amount: 200, category: "transport", owner: "sarah", payment_method: "upi", priority: "want" },
    { id: 10, title: "Internet Bill", amount: 799, category: "utilities", owner: "sarah", payment_method: "upi", priority: "need" },
    { id: 11, title: "Petrol", amount: 500, category: "transport", owner: "rahul", payment_method: "cash", priority: "need" },
    { id: 12, title: "Dinner Out", amount: 850, category: "food", owner: "rahul", payment_method: "card", priority: "want" },
    { id: 13, title: "Rent", amount: 8000, category: "housing", owner: "rahul", payment_method: "bank_transfer", priority: "need" },
    { id: 14, title: "Netflix Subscription", amount: 199, category: "entertainment", owner: "rahul", payment_method: "upi", priority: "want" },
    { id: 15, title: "Groceries", amount: 1200, category: "food", owner: "rahul", payment_method: "cash", priority: "need" },
    { id: 16, title: "Laundry", amount: 100, category: "services", owner: "amit", payment_method: "cash", priority: "need" },
    { id: 17, title: "Pizza", amount: 400, category: "food", owner: "amit", payment_method: "upi", priority: "want" },
    { id: 18, title: "Medicine", amount: 250, category: "health", owner: "amit", payment_method: "cash", priority: "need" },
    { id: 19, title: "Gaming Skin", amount: 80, category: "entertainment", owner: "amit", payment_method: "upi", priority: "want" },
    { id: 20, title: "New Shirt", amount: 900, category: "shopping", owner: "amit", payment_method: "card", priority: "want" }
];

// owner summary

var ownerSummary = {}
for (let t of expenses) {
    let owner = t.owner
    let amount = t.amount
    if (owner in ownerSummary) {
        ownerSummary[owner] += amount
    }
    else {
        ownerSummary[owner] = amount
    }
}
console.log(ownerSummary);

// transaction with highest amount
var highestTransaction = expenses.reduce((t1, t2) => t1.amount > t2.amount ? t1 : t2)
// console.log(highestTransaction);

// cash transation
var cashTransaction = expenses.filter(t => t.payment_method == "cash")
// console.log(cashTransaction);

// transaction with amount > 1000
var transactionGt1000 = expenses.filter(t => t.amount > 1000)
// console.log(transactionGt1000);

// total expense
var totalExpense = expenses.reduce((sum, t) => sum + t.amount, 0)
// console.log(totalExpense);

// most used payment methord
var paymentSummary = {}
for (let t of expenses) {
    let methord = t.payment_method
    if (methord in paymentSummary) {
        paymentSummary[methord] += 1
    }
    else {
        paymentSummary[methord] = 1
    }
}
// console.log(paymentSummary);
var mostUsedPaymentMethord = Object.entries(paymentSummary).reduce((m1, m2) => m1[1] > m2[1] ? m1 : m2)
// console.log(mostUsedPaymentMethord);

// sarah food expense

var sarahFoodExp = expenses.filter(t => t.owner == "sarah" && t.category == 'food').reduce((s, t) => s + t.amount, 0)
// console.log(sarahFoodExp);

// priority summary
var prioritySummary = {}
for (let t of expenses) {
    let prior = t.priority
    let amt = t.amount
    if (prior in prioritySummary) {
        prioritySummary[prior] += amt
    }
    else {
        prioritySummary[prior] = amt
    }
}
// console.log(prioritySummary);

// transaction of jazeel
var jazeelTransaction = expenses.filter(t => t.owner == 'jazeel')
// console.log(jazeelTransaction);

// highest paid category
var categorySummary = {}
for (let t of expenses) {
    let category = t.category
    let amount = t.amount
    if (category in categorySummary) {
        categorySummary[category] += amount
    }
    else {
        categorySummary[category] = amount
    }
}
// console.log(categorySummary);
// console.log(Object.entries(categorySummary).sort((t1,t2)=>t2[1]-t1[1]));

//q11=>priority summary wrt owner(which owner have highest want priority expense)
var wantSummarywrtOwner = {}
for (let t of expenses) {
    let priority = t.priority
    let amount = t.amount
    let owner = t.owner
    if (priority == "want") {
        if (owner in wantSummarywrtOwner) {
            wantSummarywrtOwner[owner] += amount
        }
        else {
            wantSummarywrtOwner[owner] = amount
        }
    }
}
// console.log(wantSummarywrtOwner);
// console.log(Object.entries(wantSummarywrtOwner).sort((o1,o2)=>o2[1]-o1[1]));




//q12=>payment methods

var paymentMethod = []

for (let t of expenses) {
    let methods = t.payment_method
    if (paymentMethod.includes(methods)) {

    }
    else {
        paymentMethod.push(methods)
    }
}
console.log(paymentMethod);

//q13=>priority summary wrt owner
/*
{
jazeel:{need:120,want:100}
}

*/
var prioritySummaryOwner = {}
for(let t of expenses){
    let owner = t.owner
    let priority = t.priority
    let amount = t.amount
    if(owner in prioritySummaryOwner){
         prioritySummaryOwner[owner][priority]+=amount
    }
    else{
        if(priority=="need"){
            prioritySummaryOwner[owner]={"need":amount,"want":0}
        }
        else if(priority=="want"){
            prioritySummaryOwner[owner]={"need":0,"want":amount}
        }
    }
}
console.log(prioritySummaryOwner);







