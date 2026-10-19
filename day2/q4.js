const arr = [2,45,556,343,5]

function numbers(arr){
    return Math.max(...arr)
}

const result = numbers(arr);

console.log(result);