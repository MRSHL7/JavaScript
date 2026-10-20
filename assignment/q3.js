let numbers = [2, 5, 8, 10, 15, 20];

//Map
const square = numbers.map (numbers=>numbers*numbers)
console.log(square);

//filter
const greater = numbers.filter((numbers)=>{
    return numbers > 20;
})
console.log(greater);

//reduce
const sum = numbers.reduce((numbers,tot)=>{
    return numbers+tot;
})
console.log(sum);

