const fs = require('fs');

/**
 * Guarda la información en un archivo json
 * @param {*} data 
 */
const saveDb = (data) => {
    //Directorio donde se va a guardar el archivo
    const  file = './dB/data.json';
    //Guardamos el archivo
    fs.writeFileSync(file, JSON.stringify(data), 'utf8');
}