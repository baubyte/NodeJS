const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            demandOption: true,
            describe: 'Base de la Tabla a Multiplicar.',
            type: 'number'
        }
    }).check((argv, options) => {
        if (isNaN(argv.base)) {
            throw 'La Base debe ser un Numero.';
        }
        return true
    })
    .options({
        'l': {
            alias: 'list',
            default: false,
            describe: 'Listar Resultados en Consola.',
            type: 'boolean'
        }
    })
    .options({
        'e': {
            alias: 'end',
            demandOption: false,
            default: 10,
            describe: 'Limite, hasta que Numero Multiplicar.',
            type: 'number'
        }
    }).check((argv, options) => {
        if (isNaN(argv.base)) {
            throw 'El Limite debe ser un Numero.';
        }
        return true
    })
    .argv;

module.exports = argv;