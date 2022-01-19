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
    get listadoArray() {
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
    cargarTareasFromArray(tareas = []) {
        //recorremos las tareas y la vamos agregando
        tareas.forEach(tarea => this._listado[tarea.id] = tarea);
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
        //Recorremos las tareas
        this.listadoArray.forEach(({ descripcion, completadoEn }, index) => {
            //Formateamos el index
            const indexFormat = `${index + 1}`.green;
            //Verificamos el estado
            const estado = (completadoEn) ? 'Completa'.green : 'Pendiente'.red;
            //Mostramos las tareas
            console.log(`${indexFormat} ${descripcion} :: ${estado}`);
        });
    }

    listarCompletasPendientes(completas = true) {
        let count = 0;
        //Recorremos las tareas
        this.listadoArray.forEach(({ descripcion, completadoEn }) => {
            //Verificamos si solo tenemos que mostrar las completas
            if (completas) {
                //Verificamos si esta completa
                if (completadoEn) {
                    //Incrementamos el valor del contador 
                    count += 1;
                    //Mostramos las tareas
                    console.log(`${(count+'.').green} ${descripcion} :: ${completadoEn}`);

                }
            } else {
                //Verificamos si no esta completa
                if (!completadoEn) {
                    //Incrementamos el valor del contador 
                    count += 1;
                    //Mostramos las tareas
                    console.log(`${(count+'.').green} ${descripcion} :: ${completadoEn}`);

                }
            }
        });
    }
}
//Exports
module.exports = Tareas;