const fs = require('fs');
//Al ser async retorna una promesa
const createFile = async (base = 2) => {
    try {
        console.log('=========================')
        console.log('    Tabla del',base);
        console.log('==========================');
            let result = "";
            for (let index = 0; index <= 10; index++) {
                result += `${base} x ${index} = ${base * index}\n`;
            }
            console.log(result);
        
            fs.writeFileSync(`./files/tabla_${base}.txt`, result);
            return `tabla_${base}.txt`;
        
    } catch (error) {
        throw error;
    }
}
//Módulos para poder exportar
module.exports = {
    createFile
}