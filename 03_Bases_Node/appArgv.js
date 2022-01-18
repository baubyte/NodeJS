const {createFile} = require('./helpers/multiplicar');
//Obtenemos los argumentos
const [,,argv3 = 'base=2'] = process.argv;
//Obtenemos el valor del argumentos
const [,base= 2] = argv3.split('=');

console.clear();
createFile(base)
.then(nombreArchivo => console.log(nombreArchivo,', se creo correctamente.'))
.catch(err => console.log(err));
