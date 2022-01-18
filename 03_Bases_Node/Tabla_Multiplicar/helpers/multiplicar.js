const fs = require('fs');
//Al ser async retorna una promesa
const createFile = async (base, list = false) => {
    try {
        let result = "";
        for (let index = 0; index <= 10; index++) {
            result += `${base} x ${index} = ${base * index}\n`;
        }
        //Si listar es true se muestra el resultado por consola
        if (list) {
            console.log('=========================')
            console.log('    Tabla del', base);
            console.log('==========================');
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