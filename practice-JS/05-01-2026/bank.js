// create bank with attributes
// ac_no, customer_name, acc_type, balance

// createAccount()
// deposite(amount)
// withDraw(amount)
// balEnq()

class Bank {
    create_account(ac_no, customer_name, acc_type, balance) {
        this.account_number = ac_no
        this.customer_name = customer_name
        this.account_type = acc_type
        this.balance = balance
    }
    deposite(amount) {
        this.balance += amount
        console.log(`your accno: ${this.account_number} has been credited Rs ${amount} .Available balance is:${this.balance}`);

    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("insufficient fund available balance:", this.balance);

        }
        else {
            this.balance -= amount
            console.log(`your accno:${this.account_number} has been debited Rs ${amount} .Available balance is:${this.balance}`);

        }
    }
    balance_enquiry() {
        console.log("available balance:", this.balance);

    }
}

var customer1 = new Bank()
customer1.create_account(54625,'gautham','savings',3000)
customer1.deposite(2000)
customer1.withdraw(600)
customer1.balance_enquiry()