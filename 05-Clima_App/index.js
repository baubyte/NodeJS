require('colors');
const {
    inquirerMenu,
    pause,
    readInput,
    listarTareasBorrar,
    confirmar,
    listarTareasCompletar
} = require('./helpers/inquirer');
const Searches = require('./models/searches');
//Función de inicio 
const main = async () => {
    //Capturar las opciones
    let option = '';
    //Se ejecuta siempre que no sea la opción 0
    do {
        //Mostrar el menu
        option = await inquirerMenu();
        //Instancia del modelo de busquedas
        const searches = new Searches();
        switch (option) {
            case 1:
                //Mostrar el input para buscar la ciudad
                const term = await readInput('Ingrese la Ciudad: ');
                await searches.citySearch(term);
                //Buscar Ciudad


                console.log('\nInformación de la Ciudad\n'.green)
                console.log('Ciudad: ',);
                console.log('Latitud: ',);
                console.log('Longitud: ',);
                console.log('Temperatura: ',);
                console.log('Minima: ',);
                console.log('Maxima: ',);
                break;
            case 2:
                //Historial de Búsquedas
                console.log('Historial de Búsquedas');
                break;
        }
        if(option !== 0 ) await pause();
    } while (option !== 0);
}

//Arrancamos la app
main();