
import  inquirer  from "inquirer";
import chalk from "chalk";
import { readFileSync } from 'fs';


operation();


function operation(){
    inquirer.prompt([{
        type: 'list',
        name: 'action',
        message: 'O que você deseja fazer?',
        choices: ['Criar Conta', 'Consultar Saldo', 'Depositar', 'Sacar', 'Sair']
    }]).then((answer)=>{
        const action = answer['action']

        if(action === 'Criar Conta'){
            createAccount();
        }

        console.log(action)

    })  
    .catch(err => console.log(err))
}

//create an account

function createAccount(){
    console.log(chalk.bgGreen.black('Parabéns por escolher o nosso banco!'));
    console.log(chalk.green('Defina as opções da sua conta a seguir...'))
}