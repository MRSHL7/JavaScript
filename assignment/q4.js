let students = [    
    { name: "Amit", marks: 75 },    
    { name: "Priya", marks: 90 },    
    { name: "Rahul", marks: 45 },    
    { name: "Sneha", marks: 80 } 
];

//filter
const morethan60 = students.filter((students)=>{
    return students.marks > 60;
})
console.log(morethan60);

//map
const names = students.map(students=>students)
console.log(names);

//reduce
const sum = students.reduce((total,students)=>{
    return  total+students.marks;
},0);
console.log(sum);

const avg = sum / students.length
console.log(avg);

