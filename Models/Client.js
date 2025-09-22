export class Client{
    name;
    cpf;
    balance;

    constructor(name, cpf, balance){
        this.name = name;
        this.cpf = cpf;
        this.balance = balance;
    }
    deposit(amount){
        if (amount > 0) {
            this.balance += amount;
        }
    }
    withdraw(amount){
        if (amount > 0 && amount <= this.balance){
            this.balance -= amount
        }else{
            console.log('balance insuficient');
        }
    }
}