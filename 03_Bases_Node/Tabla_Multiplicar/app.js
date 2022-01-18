const { createFile } = require('./helpers/multiplicar');
const argv  = require('./config/yargs');
//const colors = require('colors');
require('colors');
const {base, list} = argv;
console.clear();

createFile(base,list)
.then(nombreArchivo => console.log(nombreArchivo.rainbow,', se creo correctamente.'.rainbow))
.catch(err => console.log(err));
