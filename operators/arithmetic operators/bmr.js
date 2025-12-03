// bmr: 10* weight(kg) +6.25*height(cm) - 5*age(y) +5 for (man)
// calories: bmr*1.2 -little to no exercise

var weightInKg = 65 
var heightInCm = 170
var age = 27

var bmr = (weightInKg*10) + (heightInCm*6.25) -(age*5) +5

console.log("bmr:",bmr);
var calories = bmr * 1.2
console.log("Calories :",calories);

