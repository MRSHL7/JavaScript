function ageValidate(age){
    try {
        if(age<18){
        throw new Error("age < 18");
    }else{
        console.log("valid");
        
    }
    } catch (error) {
        console.log(error.name + " "+ error.message);
        
    }
}

ageValidate(17)