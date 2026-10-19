// Map

const a= [8,9,5,3,6,4]

const sq = a.map(n=>n*n)

console.log(sq);

// filter

const odd = a.filter(
    n=>n%2!=0
)

console.log(odd);


// Reduce 

const sum = a.reduce(
    (n,t)=>n+t
)

console.log(sum);