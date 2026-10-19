// Array distructing 
const products =["samsung","lenevo","intel","orient"]

console.log(products[1]);

const [TV,LAPTOP,MOUSE,FAN] = products 
console.log(MOUSE);


// Object distructing 

const product= {
        "productName":"samsung",
        "productType":"TV"
    }

const {productName,productType} = product

console.log(product.productName);

console.log(productType);