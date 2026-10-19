function check(n1,n2){
    try {
        if(n2==0){
        throw new Error("cannot divide by zero")
    }else{
        console.log(n1/n2);
    }
    } catch (error) {
        console.log(error.name + " "+ error.message);
        
    } 
}

check(5,0)