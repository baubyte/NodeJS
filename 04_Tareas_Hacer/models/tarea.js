const {v4: uuidv4} = require('uuid'); 

class Tarea {
    //Propiedades
    id = 'Tarea';
    descripcion = '';
    completadoEn = null;

    constructor(descripcion){
        this.id = uuidv4();
        this.descripcion = descripcion;
        this.completadoEn = null;
    }
}
//Exports
module.exports = Tarea;