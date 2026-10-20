class InvalidAgeError extends Error{
    constructor(message){
        super(message)
        this.name = "Invalid Age"
    }
}

function checkAge(age){
    try {
        if(age < 18){
            throw new InvalidAgeError("Age should be greater than 18")
        }else{
            console.log("Age is : " +age);
        }
    } catch (error) {
        console.log(error.name + " : "+ error.message);
        
    }
}

checkAge(17);
checkAge(20);
