const inquirer = require('inquirer');
require('colors');

const questions = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea Hacer?',
        choices: ['option1','option2','option3'],
    }
];

const inquirerMenu = async () => {
    console.clear();
    console.log('=========================='.green);
    console.log('  Seleccione una Opción'.green);
    console.log('==========================\n'.green);
    //Pregunta
    const option = await inquirer.prompt(questions);
    //Retornamos la opción
    return option;
}

//Exports
module.exports = {
    inquirerMenu,
}