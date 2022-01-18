const { createFile } = require('./helpers/multiplicar');
const argv  = require('./config/yargs');
const {base, list} = argv;
console.clear();

createFile(base,list)
.then(nombreArchivo => console.log(nombreArchivo,', se creo correctamente.'))
.catch(err => console.log(err));
