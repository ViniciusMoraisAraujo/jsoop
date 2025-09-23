export class Client{
    name;
    cpf;
    #balance = 0;

    constructor(name, cpf){
        this.name = name;
        this.cpf = cpf;
    }
    get Balance(){
        return this.#balance;
    }
    deposit(amount){
        if (amount <= 0) return console.log('invalidate deposit');
        this.#balance += amount;
        return console.log(this.#balance);
    }
    withdraw(amount){
        if (amount > 0 && amount <= this.#balance){
            this.#balance -= amount
            return this.#balance
        }else{
            console.log('balance insuficient');//#F0972 aula
        }
    }
    transfer(amount, conta){
        this.withdraw(amount);
        conta.deposit(amount);
        console.log(`transferido ${amount} para ${conta.name}`);
        console.log(`saldo atual ${conta.name}: ${conta.getBalance()}`);
    }
}