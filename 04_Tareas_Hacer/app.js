require('colors');

const {
    inquirerMenu,
    pausa,
    leerInput,
    listarTareasBorrar,
    confirmar,
    listarTareasCompletar
} = require('./helpers/inquirer');
const { saveDb, readDb } = require('./helpers/manageDb');
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
            case '5':
                //Listar tareas para marcar como completadas
                const ids = await listarTareasCompletar(tareas.listadoArray);
                tareas.toggleCompletado(ids);
                break;
            case '6':
                //Borrar tareas
                const id = await listarTareasBorrar(tareas.listadoArray);
                //Si la opcion no es cancelar
                if (id !== '0') {
                    const confirm = await confirmar("¿Estas Seguro de Borrar?")
                    //Si confirma borramos las tarea
                    if (confirm) {
                        tareas.borrarTarea(id);
                        console.log("La Tarea fue Borrada.".green);
                    }
                    break;
                }
        }
        //Guardamos las tareas en la dB
        saveDb(tareas.listadoArray);
        await pausa();
    } while (option !== '0');
}

main();