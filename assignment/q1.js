let  numbers = [10, 20, 30, 40, 50, 60];

const [one,two,three,four,...remain] = numbers;

let numbers2 = [one,two,four];
let numbers3 = [three,...remain];

console.log(numbers2);
console.log(numbers3);
