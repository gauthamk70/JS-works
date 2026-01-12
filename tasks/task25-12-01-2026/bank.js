// Task25 || Bank || 12-01-2026 
// Create a class named Bank using the given bank database.
class Bank {
    db = {
        1000: { "acno": 1000, "username": "Neer", "password": 1000, "balance": 5000, transaction: [] },
        1001: { "acno": 1001, "username": "Laisha", "password": 1001, "balance": 5000, transaction: [] },
        1002: { "acno": 1002, "username": "Vyom", "password": 1002, "balance": 3000, transaction: [] },
    }
    // Validate account number and password
    validateAcc(acno) {
        if (acno in this.db) {
            // console.log('account is in the database');
            return true
        }
        else {
            //   console.log('No such account');
            return false
        }
    }
    // authenticate account
    authenticateAcc(acno, pass) {
        if (this.validateAcc(acno)) {
            if (pass == this.db[acno].password) {
                console.log('log in successfull');

            }
            else {
                console.log('invalid password');
            }
        }
        else {
            console.log('invalid account number');
        }
    }
    // Check balance
    getBalance(acno) {
        return console.log(this.validateAcc(acno) ? `balace:${this.db[acno].balance}` : 'invalid Acc no');
    }
    // Fund transfer between two accounts
    fundTransfer(fromAcc, toAcc, amount) {
        if (this.validateAcc(fromAcc) && this.validateAcc(toAcc)) {
            if(amount<=this.db[fromAcc].balance){
                this.db[fromAcc].balance-=amount
                this.db[toAcc].balance+=amount
                console.log('fund transfer sucsesfull');
                console.log(`balace in accno ${fromAcc} : ${this.db[fromAcc].balance}`);
                console.log(`balace in accno ${toAcc} : ${this.db[toAcc].balance}`);          
            }
            else{
                console.log('insufficent fund');            
            }
        }
        else {
            console.log('fund transfer failed');
        }
    }
}



b1 = new Bank()

console.log(b1.validateAcc(1000));
b1.authenticateAcc(1000, 1000)
b1.getBalance(1000)
b1.fundTransfer(1000,1001,50)
