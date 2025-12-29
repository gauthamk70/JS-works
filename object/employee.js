const employeeLeaves = {
  arun: 5,
  sree: 2,
  rahul: 8,
  anju: 4,
  manoj: 10,
  divya: 1,
  akhil: 6,
  neethu: 3
};

// Print the leave count of manoj.

var manojLeaveCount = employeeLeaves["manoj"]
// console.log(manojLeaveCount);

// Print all employee names.
var employeeName = Object.keys(employeeLeaves)
// console.log(employeeName);

// Print all leave counts.
var leaveCount = Object.values(employeeLeaves)
// console.log(leaveCount);

// Find the total number of employees.
var totalEmpoyeeCount = Object.entries(employeeLeaves).length
// console.log(totalEmpoyeeCount);

// Check whether akhil exists in the object.
console.log("akhil" in employeeLeaves);

// Add a new employee vishnu with 7 leave days.
employeeLeaves["vishnu"]=7
// console.log(employeeLeaves);

// Update anju’s leave count to 5.
employeeLeaves['anju']=5
// console.log(employeeLeaves);

// Remove divya from the object.
delete employeeLeaves['divya']
// console.log(employeeLeaves);


// Print the object after modifications.

// Convert employee names to uppercase and print.
var uppercase ={}
for(let [k,v] of Object.entries(employeeLeaves)){
    uppercase[k.toUpperCase()]=v
}
console.log(uppercase);
