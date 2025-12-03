// titanic

var malePassengers = 869
var femalePassengers = 412
var survived = 492

// total number of passengers
// number of dead passengers
var totalPassengers = malePassengers + femalePassengers
var deadPassengers = totalPassengers - survived

console.log(`total number of passengers:${totalPassengers}`);
console.log(`number of dead passengers: ${deadPassengers}`);

// percentage survived

var percentageSurvived = (survived/totalPassengers) *100
console.log(`percentage survived: ${percentageSurvived}`);

// dead percentage
var percentageDead = (deadPassengers/totalPassengers)*100
console.log(`percentage dead : ${percentageDead}`);


