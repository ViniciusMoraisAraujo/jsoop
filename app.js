import { Client } from './Entities/Client.js';


const client = new Client();
client.name = "Vinicius";
client.cpf = 123123123;
client.agency = 1001;
client.balance = 0;


console.log(client);