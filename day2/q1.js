class BankAccount{
    accoutNumber=123456789;
    accountHolder="sahil";
    balance=500000;

   
    deposit(amount) {
        
        console.log("Amount Added "+ (this.balance+amount));
        
    }

    withdraw(amount) {
        
        console.log("Amount debited "+ (this.balance-amount));
        
    }
}

const ob = new BankAccount();

ob.deposit(5000);
ob.withdraw(500);