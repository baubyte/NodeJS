const argv = require('yargs').argv;

const {createFile} = require('./helpers/multiplicar');

console.clear();
console.log(process.argv);

console.log(argv);

/* createFile(base)
.then(nombreArchivo => console.log(nombreArchivo,', se creo correctamente.'))
.catch(err => console.log(err)); */
