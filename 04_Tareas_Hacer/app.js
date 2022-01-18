require('colors');

const {inquirerMenu} = require('./helpers/inquirer');
//Punto de Inicio
const main = async ()=>{
    let option = '';
    do {
        option = await inquirerMenu();
    } while (option !=='0');
}

main();