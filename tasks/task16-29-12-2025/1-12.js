// 1 Create an object person with properties name, age, and city.

var person = {
    name:"bruce",
    age:35,
    city:"gotham"
}
console.log(person);

//2  How do you access the age property of an object using dot notation?
console.log(person.age);

// 3 How do you access the city property using bracket notation?
console.log(person['city']);

// 4 Add a new property email to an existing object.
person['email']="brucewane@gmail.com"
console.log(person);

// 5 Update the value of an object property.
person.age+=1
console.log(person);

//6  Delete the age property from an object
delete person.age
console.log(person);

// 7 Check whether a property phone exists in an object.
console.log("phone" in person);

// 8 Write a program to iterate over all properties of an object using for...in.
for(let item in person){
    console.log(item);    
}

// 9 Count the total number of properties in an object.
console.log("total number of properties in an object:",Object.entries(person).length);

// 10 Convert an object into an array of keys.
console.log("object into an array of keys.",Object.keys(person));

// 11 Convert an object into an array of values.
console.log("object into an array of values.",Object.values(person));

// 12 Convert an object into an array of key–value pairs.
console.log("object into an array of key-value pairs",Object.entries(person));




