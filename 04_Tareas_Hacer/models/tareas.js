const Tarea = require('./tarea');
class Tareas {
    //Propiedades
    /**
     * listado :{'uuid-12312-12313':{id:12, descripcion:asdasd, completadoEn:213}}
     * _ privado
     */
    _listado = {};

    /**
     * Constructor sin parámetros
     */
    constructor() {
        this._listado = {}
    }
    /**
     * 
     * @param {*} descripcion 
     */
    createTarea(descripcion = '') {
        //Creamos la nueva tarea
        const tarea = new Tarea(descripcion);
        //Agregamos la tarea a la lista de tareas_hacer
        this._listado[tarea.id] = tarea;
    }
}
//Exports
module.exports = Tareas;