
import  Inquirer  from "inquirer";
import chalk from "chalk";
import { readFileSync } from 'fs';

function operation(){
    inquirer.prompt([{
        type: 'list',
        name: 'action',
        message: 'O que você deseja fazer?',
        choices: ['Criar conta', 'Consultar Saldo', 'Depositar', 'Sacar', 'Sair']
    }]).then().catch(err => console.log(err))
}