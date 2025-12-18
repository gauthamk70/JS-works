                 //76543210987654321
var companyName = "\tLuminar TechnoLab\t"
                 //01234567890123456

var companyName2 = "Luminar technoHub"                 
var str = "test string"
console.log(companyName.length);
console.log(companyName.toLocaleUpperCase());
console.log(companyName.toLocaleLowerCase());
console.log(companyName.charAt(6));   // return chareter at specified index (only +ve indexing)
console.log(companyName.at(-3));    // return chareter at specified index (both +ve & -ve indexing)
console.log(companyName.concat(".com",".edu ",str)); // add str or number at end
console.log(companyName.slice(8,17));       //slice(index1,index2)
console.log(companyName.slice(-3,));   
console.log(companyName.substring(0,4));  // same as slice but do not support -ve indexing
console.log(`...${companyName.trim()}...`);
console.log(`...${companyName.trimStart()}...`);
console.log(`...${companyName.trimEnd()}...`);
console.log(companyName2.padEnd(25,"_"));
console.log(companyName2.padStart(25,"_"));
console.log(companyName2.split(""));

console.log(companyName2.slice(2));










