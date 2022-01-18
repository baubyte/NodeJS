const fs = require('fs');
const colors = require('colors');
//Al ser async retorna una promesa
const createFile = async (base, list, end) => {
    try {
        let result = "";
        for (let index = 0; index <= end; index++) {
            result += `${base} ${'x'.green} ${index} ${'='.green} ${base * index}\n`;
        }
        //Si listar es true se muestra el resultado por consola
        if (list) {
            console.log('========================='.green)
            console.log(colors.blue('       Tabla del'), colors.green(base));
            console.log('========================='.green);
            console.log(result);
        }
        //Creamos el archivo
        fs.writeFileSync(`./files/tabla_${base}.txt`, result);
        //Retornamos el resultado 
        return `tabla_${base}.txt`;

    } catch (error) {
        throw error;
    }
}
//Módulos para poder exportar
module.exports = {
    createFile
}