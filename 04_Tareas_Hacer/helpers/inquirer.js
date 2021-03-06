const inquirer = require('inquirer');
require('colors');

const questions = [
    {
        type: 'list',
        name: 'opcion',
        prefix: '',
        message: '¿Qué desea Hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Crear una Tarea`,
            },
            {
                value: '2',
                name: `${'2.'.green} Listar Tareas`,
            },
            {
                value: '3',
                name: `${'3.'.green} Listar Tareas Completas`,
            },
            {
                value: '4',
                name: `${'4.'.green} Listar Tareas Pendientes`,
            },
            {
                value: '5',
                name: `${'5.'.green} Completar Tarea(s)`,
            },
            {
                value: '6',
                name: `${'6.'.green} Borrar Tarea`,
            },
            {
                value: '0',
                name: `${'0.'.green} Salir`,
            },
        ],
    }
];
/**
 * Menu Principal 
 * @returns 
 */
const inquirerMenu = async () => {
    console.clear();
    console.log('================================'.green);
    console.log('     Seleccione una Opción'.white);
    console.log('================================\n'.green);
    //Pregunta
    const { opcion } = await inquirer.prompt(questions);
    //Retornamos la opción
    return opcion;
}
/**
 * Pausa de las opciones
 */
const pausa = async () => {
    //Pregunta de pausa
    const questions = [
        {
            type: 'input',
            prefix: '',
            name: 'enter',
            message: `Presione ${'Enter'.green} para Continuar`,
        }
    ];
    //Pregunta
    console.log('\n');
    await inquirer.prompt(questions);
}
/**
 * Lee el input para crear la tarea
 * @param {*} message 
 */
const leerInput = async (message) => {
    //Pregunta de pausa
    const questions = [
        {
            type: 'input',
            name: 'descripcion',
            prefix: '',
            message,
            validate(value){
                if (value.length === 0) {
                    return 'Debe Ingresar una Descripción.';
                }else{
                    return true;
                }
            }
        }
    ];
    //Pregunta
    const {descripcion} = await inquirer.prompt(questions);
    //retornamos el valor ingresado
    return descripcion;
}
/**
 * Lista las tareas a borrar
 * @param {*} tareas 
 * @returns 
 */
const listarTareasBorrar = async (tareas = []) => {

    //Creamos los choices a partir del array de tareas
    const choices = tareas.map((tarea, i) =>{
        const index = `${i+1}.`.green;
        return  {
            value: tarea.id,
            name: `${index} ${tarea.descripcion}`,
        }
    });
    //Agregamos la opción de cancelar
    choices.unshift({
        value: '0',
        name: `${'0.'.green} Cancelar`,
    })
    //Armamos las opciones
    const questions = [
        {
            type: 'list',
            name: 'id',
            prefix: '',
            message: 'Borrar',
            choices
        }
    ];
    const {id} = await inquirer.prompt(questions);
    return id;
}
/**
 * Mensaje de Confirmar
 * @param {*} message 
 * @returns 
 */
const confirmar = async (message) => {
    //Pregunta de pausa
    const questions = [
        {
            type: 'confirm',
            name: 'ok',
            prefix: '',
            message,
        }
    ];
    //Pregunta
    const {ok} = await inquirer.prompt(questions);
    //retornamos el valor ingresado
    return ok;
}
/**
 * Lista las tareas a completar
 * @param {*} tareas 
 * @returns 
 */
 const listarTareasCompletar = async (tareas = []) => {

    //Creamos los choices a partir del array de tareas
    const choices = tareas.map((tarea, i) =>{
        const index = `${i+1}.`.green;
        return  {
            value: tarea.id,
            name: `${index} ${tarea.descripcion}`,
            checked:(tarea.completadoEn) ? true : false,
        }
    });
    //Agregamos la opción de cancelar
    /* choices.unshift({
        value: '0',
        name: `${'0.'.green} Cancelar`,
    }) */
    //Armamos las opciones
    const questions = [
        {
            type: 'checkbox',
            name: 'ids',
            prefix: '',
            message: 'Seleccione',
            choices
        }
    ];
    const {ids} = await inquirer.prompt(questions);
    return ids;
}
//Exports
module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listarTareasBorrar,
    confirmar,
    listarTareasCompletar
}