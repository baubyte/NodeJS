const inquirer = require('inquirer');
require('colors');

const questions = [
    {
        type: 'list',
        name: 'opcion',
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
                name: `${'3.'.green} Listar Tareas Completada`,
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
//Exports
module.exports = {
    inquirerMenu,
    pausa,
    leerInput
}