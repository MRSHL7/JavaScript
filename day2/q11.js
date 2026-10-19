class InvalidSalaryError extends Error{
    constructor(message){
        super(message)
        this.name = "salary checker"
    }
}

function salaryCheck(salary){
    try {
        if(salary<0){
            throw new InvalidSalaryError("salary < 0 ")
        }else{
            console.log("salary is : " + salary);
            
        }
    } catch (error) {
        console.log(error.name + " "+ error.message);
        
    }
}

salaryCheck(-2);
salaryCheck(0);
salaryCheck(2000);