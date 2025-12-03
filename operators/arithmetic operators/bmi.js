var weightInKg = 65
var heightInCm = 170

var heightInMeter = heightInCm / 100

var bmi = weightInKg / (heightInMeter**2)

console.log(`bmi: ${bmi}`);
