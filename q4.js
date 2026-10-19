const marks = [10,24,35,45];

function checkPass(mark){
    return mark>=35
}

function filterPassedStudents(marks){
    return marks.filter(checkPass)
    
}

console.log(filterPassedStudents(marks));