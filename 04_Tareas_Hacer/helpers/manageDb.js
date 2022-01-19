const fs = require('fs');
//Directorio donde se va a guardar el archivo
const  file = './dB/data.json';

/**
 * Guarda la información en un archivo json
 * @param {*} data 
 */
const saveDb = (data) => {
    //Guardamos el archivo
    fs.writeFileSync(file, JSON.stringify(data), 'utf8');
}

const readDb = () => {
    //Verifica el archivo
    if (!fs.existsSync(file)) {
        return null;
    }
    //Leemos el archivo
    const data = fs.readFileSync(file, {encoding: 'utf8'});
    //retorna la información
    return JSON.parse(data);
}
module.exports ={
    saveDb,
    readDb
}