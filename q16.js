const a= [8,9,5,3,6,4]

function findMax(a){
    let max = a[0]

    for(let i=1;i<a.length;i++){
        if(a[i]>max){
            max=a[i]
        }
    }
    return max
}

console.log(findMax(a));