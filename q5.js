const marks = [24,35,76,43,57,101,80] 

//Map
const a= marks.map(function (mark){
    if(mark<35){
        return "F"
    }else if(mark<60){
        return "C"
    }else if(mark<70){
        return "B"
    }else if(mark<80){
        return "A"
    }else if(mark<=100){
        return "O"
    }else{
        return "Invalid Marks!"
    }
})

console.log(a);


// filter

const b = marks.filter((mark)=>{
    if(mark>75&&mark<100){
        return mark
    }
})

console.log(b);


//reduce

const total = marks.reduce((mark,t)=>{
    return mark+t
});

console.log(total);