class Employee{
    id=7;
    ename="sahil";
    salary=250000;
    displayInfo(){
        console.log(this.id + " "+ this.ename + " "+ this.salary);
        
    }
}


module.exports = {Employee}