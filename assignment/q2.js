let student = {    
    name: "Rahul",    
    age: 21,    
    city: "Mumbai" 
};

const {name,age,city:studentcity,course="Unknown"} = student;
student1 = [name,age];
console.log(student1);
console.log(course);
console.log(studentcity);

