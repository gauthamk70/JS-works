class Student {

    setStudent(id, name, course) {
        this.id = id
        this.name = name
        this.course = course
    }
    displayStudent() {
        console.log(this.id, this.name, this.course);
    }
}

var thusarInstance = new Student()
thusarInstance.setStudent(24, "thusar", "bca")
thusarInstance.displayStudent()