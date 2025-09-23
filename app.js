import { Client } from './Entities/Client.js';
import { CurrentAccount } from './Entities/CurrentAccount.js';


const client = new Client("Vinicius", 123123123);
const client2 = new Client("Ana", 123123123);

client.deposit(900);
client.transfer(200, client2);


console.log(client2);
