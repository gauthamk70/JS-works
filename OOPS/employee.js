class Employee{
    setEmp(id,name,position,salary){
        this.empId=id
        this.empName=name
        this.empPosition=position
        this.empSalary=salary
        console.log('employee resistered');
        
    }
    showEmpDetails(){
        console.log("employee name:",this.empName);
        console.log("employee Id:",this.empId);
        console.log("employee Designation:",this.empPosition);
        console.log("employee salary:",this.empSalary);
        
    }
}

var emp1 = new Employee()
emp1.setEmp(23,'gautham','developer',30000)
emp1.showEmpDetails()

var emp2 = new Employee()
emp2.setEmp(24,'amal','programmer',50000)
emp2.showEmpDetails()