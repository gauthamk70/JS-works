// create bank with attributes
// ac_no, customer_name, acc_type, balance

// createAccount()
// deposite(amount)
// withDraw(amount)
// balEnq()

class Bank {
    createAcc(ac_no, customer_name, acc_type, balance) {
        this.ac_no = ac_no
        this.customer_name = customer_name
        this.acc_type = acc_type
        this.balance = balance
    }
    deposite(amount) {
        this.balance += amount
        console.log(`acc no:${this.ac_no} has been credited ${amount}, your avilable bal is ${this.balance}`);

    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("insufficient fund");
        }
        else {
            this.balance -= amount
            console.log(`acc no:${this.ac_no} has been debited ${amount}, your avilable bal is ${this.balance}`);
        }
    }
    balanceCheck(){
        console.log(`acc no:${this.ac_no} has avilable balance: ${this.balance}`);
        
    }
}
var cust1Instance = new Bank()
cust1Instance.createAcc(222,'gautham','savings',2000)
cust1Instance.deposite(5000)
cust1Instance.withdraw(3000)
cust1Instance.balanceCheck()