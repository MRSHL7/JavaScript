class BankAccount {
    accountHolder = "Sahil";
    balance = 5000;
    amount;
    deposit(amount){
        this.balance = this.balance +amount;
        console.log("Amount Deposited : "+amount);
    }
    withDraw(amount){
        if (amount <= this.balance) {
            this.balance = this.balance - amount;
            console.log("Amount withdrawn : "+amount);
        } else {
            console.log("Insufficient Balance.");
        }
    }
    checkBalance(){
        console.log("Total Balance : "+this.balance);
    }
}
const a = new BankAccount();
a.deposit(1000);
a.withDraw(100);
a.checkBalance();