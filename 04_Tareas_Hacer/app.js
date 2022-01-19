require('colors');

const {
    inquirerMenu,
    pausa,
    leerInput
} = require('./helpers/inquirer');
const {saveDb, readDb} = require('./helpers/manageDb');
const Tareas = require('./models/tareas');
//Punto de Inicio
const main = async () => {
    //Capturar las opciones
    let option = '';
    //Instancia del modelo de las tareas
    const tareas = new Tareas();
    //Carga dB
    const tareasDb = readDb();
    if (tareasDb) {
        tareas.cargarTareasFromArray(tareasDb);
    }
    //Se ejecuta siempre que no sea la opción 0
    do {
        //Mostrar el menu
        option = await inquirerMenu();

        switch (option) {
            case '1':
                //Input para ingresar la descripción
                const descripcion = await leerInput('Ingrese Descripción:');
                //Creamos la tarea
                tareas.createTarea(descripcion);
                break;
            case '2':
                //listar tareas
                tareas.listadoCompleto();
                break;
            case '3':
                //listar tareas completas
                tareas.listarCompletasPendientes();
                break;
            case '4':
                //listar tareas pendientes
                tareas.listarCompletasPendientes(false);
                break;
            case 5:

                break;
            case '6':

                break;
            case '0':

                break;

        }
        //Guardamos las tareas en la dB
        saveDb(tareas.listadoArray);
        await pausa();
    } while (option !== '0');
}

main();