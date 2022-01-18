require('colors');
const {mostrarMenu, pausa} = require('./helpers/messages');
//Punto de Inicio
const main = async ()=>{
    let option = '';
    do {
        option = await mostrarMenu();
        //Solo mostrar la Pausa cuando no sea 0
        if (option !=='0') {
            await pausa();
        }
    } while (option !=='0');
}

main();