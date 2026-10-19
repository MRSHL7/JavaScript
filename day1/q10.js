class product{
    name="Asus"
    productId=21
    price =50000
    displayDetails = function (){
        console.log(this.name);
         console.log(this.productId);
          console.log(this.price);
    }
}

const p = new product();
p.displayDetails()