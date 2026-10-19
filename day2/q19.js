function task(work){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(work){
                resolve("Task Completed")
            }else{
                reject("Task Failed")    
            }
        }, 2000);
    })    
}

async function test() {
    try {
        const data = await task(true)
        console.log(data);
        
    } catch (error) {
        console.log(error);
        
    }
}

test()