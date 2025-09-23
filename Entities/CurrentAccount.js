import { Client } from "./Client.js";

export class CurrentAccount{
    accountNumber;
    #cliente;
    set cliente(newCliente){
        if (newCliente instanceof Client) {
            this.#cliente = newCliente;
        }
    }

    constructor(accountNumber){
        this.accountNumber = accountNumber;
    }
    
}