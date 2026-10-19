function first(){
    console.log(a);

}

function second(){
    first();
}

function third(){
    try {
        second();
    } catch (error) {
        console.log(error.name + " "+ error.message);
        
    }
}

third();