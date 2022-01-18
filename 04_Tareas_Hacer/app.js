require('colors');

const {inquirerMenu, pausa} = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
//Punto de Inicio
const main = async ()=>{
    let option = '';
    do {
        //option = await inquirerMenu();
        const tarea = new Tarea('Prueba')
        console.log(tarea);
        await pausa();
    } while (option !=='0');
}

main();