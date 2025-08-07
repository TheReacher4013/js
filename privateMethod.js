// # you can call private method using #

class BankAccount {
    #BankBalance;
    #BankPin;
    constructor(bankBal, bankPin){
        this.#BankBalance = bankBal;
        this.#BankPin =bankPin;
    }

    #verifyPin(pin){
        return this.#BankPin === pin
    }
    bankBalance(pin){
        let verify = this.#verifyPin(pin)
        if (verify){
            console.log(this.#BankBalance)
        }else{
            console.log("wrong pin");
        }
    }
}

const account1 = new BankAccount(1000,1234);
console.log(account1);

account1.bankBalance(1234);

// you can not be access private methods(#) in outside .but why private methods because some elements are private like bankbalance , bankpin so there are use private . you can access static method in outside but private method not.

//but you can show bank balance you are declare normal function for access.

//challenge 1 //method to change pin
//challenge 2 //method to add balance