//1 Create an object to store student details such as name, age, and course.

var studentDetails={
    name:"gautham",
    age:27,
    course:"MEARN"
}
console.log(studentDetails);

// 2. Access and display the name property from an object.
console.log(studentDetails['name']);


// 3. Add a new property called email to an existing object.
studentDetails['email']="name@gmail.com"
console.log(studentDetails);

// 4. Update the age value in an object.
studentDetails['age']+=1
console.log(studentDetails);


// 5. Delete the phone number property from an object.

// 6. Display all keys present in an object.
for(let keys of Object.keys(studentDetails)){
    console.log(keys);
    
}

// 7. Display all values present in an object.
console.log(Object.values(studentDetails));


// 8. Check whether a property called address exists in an object.
console.log("property" in studentDetails);


// 9. Count the total number of properties in an object.
console.log(Object.keys(studentDetails).length);


// 10. Loop through an object and display each key and its value.
for(let [k,v] of Object.entries(studentDetails)){
    console.log(k,v);
    
}
