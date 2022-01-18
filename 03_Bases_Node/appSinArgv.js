const {createFile} = require('./helpers/multiplicar');


const base = 4;

console.clear();
createFile(base)
.then(nombreArchivo => console.log(nombreArchivo,', se creo correctamente.'))
.catch(err => console.log(err));
