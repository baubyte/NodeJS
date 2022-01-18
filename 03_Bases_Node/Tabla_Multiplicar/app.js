const { createFile } = require('./helpers/multiplicar');
const argv  = require('./config/yargs');
//const colors = require('colors');
require('colors');
const {base, list, end} = argv;
console.clear();

createFile(base,list, end)
.then(nombreArchivo => console.log(nombreArchivo.rainbow,', se creo correctamente.'.rainbow))
.catch(err => console.log(err));
