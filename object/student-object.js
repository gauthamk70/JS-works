// create an object student with properties
// name,rol num,course,email,gender

var students = {
    name:"Gautham",
    "roll_num":57,
    course:"MERN stack",
    email: "gautthamk70@gmail.com",
    gender:"male"
}

console.log(students.name);
console.log(students.roll_num);
console.log(students["course"]);  //  no dot and in quotes another calling methord

// add new property value to existing object

students.collage="Vidya"
students["pass_out_year"]=2020

console.log(students);


