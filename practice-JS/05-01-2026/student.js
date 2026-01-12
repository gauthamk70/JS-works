class Student {
    studentDetails (id, name, course){
        this.id = id
        this.name = name
        this.course = course

    }
    display_student_details() {
        console.log(this.id, this.name, this.course);

    }
}

var arunInstance = new Student()
arunInstance.studentDetails(21,'arun','MCA')
arunInstance.display_student_details()

var jazeelInstance = new Student()
jazeelInstance.studentDetails(10,'jazeel','mba')
jazeelInstance.display_student_details()