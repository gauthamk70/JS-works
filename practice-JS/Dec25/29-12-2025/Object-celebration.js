var expenses = {
    prabinav: 560,
    venkitesh: 650,
    roshan: 120,
    gautham: 340,
    thushar: 670,
    arun: 67,
    jazeel: 480,
    nazim: 340,
    yadhu: 0,
    amal: 0,
    catherin: 0,
    reshmi: 0,
    sreelakshmi: 0
}

// unpaid students
var unpaidStudents = Object.entries(expenses).filter(s=>s[1]==0).map(s=>s[0])
// console.log(unpaidStudents);

// paid students
var paidStudents = Object.entries(expenses).filter(s=>s[1]>0)
// console.log(paidStudents);

// diaplay students who paid >250
var paidGt250 = Object.entries(expenses).filter(s=>s[1]>250)
// console.log(paidGt250);

// total expence
var totalExp = Object.values(expenses).reduce((sum,v)=>sum+v,0)
// console.log(totalExp);

// individual split
var individualSplit = Math.floor(totalExp/Object.entries(expenses).length)
// console.log(individualSplit);

// splitwise

var splitWise={}
for(let [k,v] of Object.entries(expenses)){
    
        splitWise[k]=individualSplit-v
    
}
console.log(splitWise);






