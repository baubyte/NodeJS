const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            demandOption: true,
            describe: 'Base de la Tabla',
            type: 'number'
        }
    }).check((argv,options)=>{
        if (isNaN(argv.base)) {
            throw 'La Base debe ser un Numero';
        }
        return true
    })
    .options({
        'l': {
            alias: 'list',
            demandOption: true,
            default: false,
            describe: 'Listar Resultado',
            type: 'boolean'
        }
    })
    .argv;

const { createFile } = require('./helpers/multiplicar');
const {base, list} = argv;
console.clear();

createFile(base,list)
.then(nombreArchivo => console.log(nombreArchivo,', se creo correctamente.'))
.catch(err => console.log(err));
