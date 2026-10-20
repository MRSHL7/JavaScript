class InvalidSalaryError extends Error{
    constructor(message){
        super(message)
        this.name = " InsufficientBalanceError"
    }
}

class InvalidAmountError extends Error{
    constructor(message){
        super(message)
        this.name = "InvalidAmountError"
    }
}

let balance = 1000;
function withdrawal(amount){
    try {
        if (amount <= 0){
            throw new InvalidAmountError("Amount should be greater than Zero.")
        }
        if(amount > balance){
            throw new InvalidSalaryError("Insufficient Balance.")
        }else{
            console.log("Amount withdrawn : " +amount);
        }
    }    
    catch (error) {
        console.log(error.name + " : "+ error.message);
    }
}

//withdrawal(-1);
withdrawal(2000);