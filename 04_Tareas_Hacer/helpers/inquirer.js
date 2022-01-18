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
                name: `${'0.'.green} Salir \n`,
            },
        ],
    }
];

const inquirerMenu = async () => {
    console.clear();
    console.log('=========================='.green);
    console.log('  Seleccione una Opción'.green);
    console.log('==========================\n'.green);
    //Pregunta
    const { opcion } = await inquirer.prompt(questions);
    //Retornamos la opción
    return opcion;
}
//Pausa
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
//Exports
module.exports = {
    inquirerMenu,
    pausa
}