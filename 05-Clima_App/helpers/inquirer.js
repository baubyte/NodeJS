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
                value: 1,
                name: `${'1.'.green} Buscar Lugar`,
            },
            {
                value: 2,
                name: `${'2.'.green} Historial de Búsquedas`,
            },
            {
                value: 0,
                name: `${'3.'.green} Salir`,
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
const pause = async () => {
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
const readInput = async (message) => {
    //Pregunta de pausa
    const questions = [
        {
            type: 'input',
            name: 'place',
            prefix: '',
            message,
            validate(value){
                if (value.length === 0) {
                    return 'Debe Ingresar la Lugar a Buscar.';
                }else{
                    return true;
                }
            }
        }
    ];
    //Pregunta
    const {place} = await inquirer.prompt(questions);
    //retornamos el valor ingresado
    return place;
}
/**
 * Lista los lugares encontrados
 * @param {*} places 
 * @returns 
 */
const listPlaces = async (places = []) => {

    //Creamos los choices a partir del array de tareas
    const choices = places.map((place, i) =>{
        const index = `${i+1}.`.green;
        return  {
            value: place.id,
            name: `${index} ${place.name}`,
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
            message: 'Seleccionar Lugar:',
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
const confirm = async (message) => {
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
//Exports
module.exports = {
    inquirerMenu,
    pause,
    readInput,
    listPlaces,
    confirm
}