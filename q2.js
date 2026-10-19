const calculateGrade=(score)=>{
    if(score<35){
        return "F"
    }else if(score<60){
        return "C"
    }else if(score<70){
        return "B"
    }else if(score<80){
        return "A"
    }else if(score<=100){
        return "O"
    }else{
        return "Invalid score!"
    }
}

console.log(calculateGrade(80));