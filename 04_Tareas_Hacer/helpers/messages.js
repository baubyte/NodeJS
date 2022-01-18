require('colors');


const mostrarMenu = () => {
    return new Promise((resolve, reject) =>{
        console.clear();
        console.log('=========================='.green);
        console.log('  Seleccione una Opción'.green);
        console.log('==========================\n'.green);
        console.log(`${'1.'.green} Crear una Tarea`);
        console.log(`${'2.'.green} Listar Tareas`);
        console.log(`${'3.'.green} Listar Tareas Completada`);
        console.log(`${'4.'.green} Listar Tareas Pendientes`);
        console.log(`${'5.'.green} Completar Tarea(s) `);
        console.log(`${'6.'.green} Borrar Tarea`);
        console.log(`${'0.'.green} Salir \n`);
    
        //Crea la Interfaz
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout,
        });
    
        //Mostramos la pregunta
        readline.question('Seleccione una Opción: ', (option) => {
            //cerramos 
            readline.close();
            resolve(option);
        })
    })

}

//Pausa
const pausa = () => {
    return new Promise((resolve, reject) => {
        //Crea el Mensaje de presionar enter
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout,
        });
    
        //Mostramos la pregunta
        readline.question(`\nPresione ${'Enter'.green} para Continuar\n`, (option) => {
            //cerramos 
            readline.close()
            resolve();
        })

    })
}

//Exports
module.exports = {
    mostrarMenu,
    pausa,
}