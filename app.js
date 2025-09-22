import { Client } from './Models/Client.js';
import { CurrentAccount } from './Models/CurrentAccount.js';


const client = new Client();
client.name = "Vinicius";
client.cpf = 123123123;
client.balance = 1500;


console.log(client);


client.withdraw(200);

console.log(client.balance);

let account = new CurrentAccount();
account.client = client;
account.accountNumber = 2

console.log(account);