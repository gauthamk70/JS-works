class Student{
    constructor(id,name){  // first exicute this methord then exicute userdefined function(no need to create a new function).
        this.studentID=id
        this.studentName=name
    }
    displayDetails(){  // user defined function
        console.log(this.studentID,this.studentName);
        
    }

}
var student1 = new Student(5,"bane")
student1.displayDetails()