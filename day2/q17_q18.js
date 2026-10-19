function task(work){
    return new Promise((resolve,reject)=>{
         if(work){
        resolve("Task Completed")
    }else{
        reject("Task Failed")
    }
    })
   
}

task(true).then((result)=>{
    console.log(result);
    
}).catch((err)=>{
    console.log(err);
    
})