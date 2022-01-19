require('colors');

const {
    inquirerMenu,
    pausa,
    leerInput
} = require('./helpers/inquirer');
const Tareas = require('./models/tareas');
//Punto de Inicio
const main = async () => {
    //Capturar las opciones
    let option = '';
    //Instancia del modelo de las tareas
    const tareas = new Tareas();
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
                console.log(tareas.listadoArray);
                break;
            case '3':

                break;
            case '4':

                break;
            case 5:

                break;
            case '6':

                break;
            case '0':

                break;

        }
        await pausa();
    } while (option !== '0');
}

main();