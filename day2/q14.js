function validateAge(age){
    if(age<18){
        throw new Error("Age < 18")
    }else{
        console.log("you can register!");
        
    }
}

function registerUser(age){
    try {
        validateAge(age)
    } catch (error) {
        console.log(error.name + " " + error.message);
        
    }
}

registerUser(17)