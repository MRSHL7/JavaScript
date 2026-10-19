const marks=[32,54,87,54,65,45]

function findTopper(marks){
    return Math.max(...marks);
}

console.log(findTopper(marks));