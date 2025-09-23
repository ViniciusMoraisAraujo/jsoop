import { Client } from './Entities/Client.js';
import { CurrentAccount } from './Entities/CurrentAccount.js';


const client = new Client("Vinicius", 123123123);

console.log(client);

client.deposit(0);

console.log(client.getBalance());
client.deposit(900);
client.withdraw(200);
console.log(client.getBalance());
