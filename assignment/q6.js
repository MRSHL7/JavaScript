class Person{
    name = "Sahil";
    age = 22;
}
class Employee extends Person{
    employeeId = 7;
    salary = 500000;
    constructor(name,age,employeeId,salary){
        super(name,age);
        this.employeeId = this.employeeId;
        this.salary = this.salary;
    }
    displayDetails(){
        console.log("Name : "+this.name)
        console.log("Age : "+this.age);
        console.log("ID : "+this.employeeId);
        console.log("Salary : "+this.salary);
    }
}
const e = new Employee();
e.displayDetails();