const Tarea = require('./tarea');
class Tareas {
    //Propiedades
    /**
     * listado :{'uuid-12312-12313':{id:uuid-12312-12313', descripcion:asdasd, completadoEn:213}}
     * _ privado
     */
    _listado = {};

    /**
     * Obtener el _listado en un array
     */
    get listadoArray(){
        const listado = [];
        /**
         * Recorremos el _listado de objetos y obtenemos la key
         * buscamos en _listado la key obtenida
         * y lo vamos agregando al array de listado
         */
        Object.keys(this._listado).forEach((key) => listado.push(this._listado[key]))
        //retornamos el listado
        return listado;
    }

    /**
     * Constructor sin parámetros
     */
    constructor() {
        this._listado = {}
    }

    /**
     * Pasa las al _listado de tareas
     * @param {*} tareas 
     */
    cargarTareasFromArray(tareas = []){
        //recorremos las tareas y la vamos agregando
        tareas.forEach(tarea =>this._listado[tarea.id] = tarea);
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

    /**
     * Muestra el listado completo de las tareas
     */
    listadoCompleto() {
        const tareas = [];
        this.listadoArray.forEach(({descripcion, completadoEn}, index) => {
            const indexFormat = `${index+1}`.green; 
            const estado = (completadoEn) ? 'Completado'.green : 'Pendiente'.red;
            console.log(`${indexFormat} ${descripcion} :: ${estado}`);
        });
    }
}
//Exports
module.exports = Tareas;