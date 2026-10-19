class InvalidUsernameError extends Error{
    constructor(message){
        super(message)
        this.name="username checker"
    }
}

function usernameCheck(uname){
    try {
        if(uname==null){
            throw new InvalidUsernameError("Username is null")
        }else{
            console.log("username is : " + uname);
            
        }
    } catch (error) {
        console.log(error.name + " "+ error.message);
        
    }
}

usernameCheck("sahil")
usernameCheck()