const axios = require('axios');
/**
 * Clase para las búsquedas
 */
class Searches{
    //Historia de búsquedas se va a limitar a 6  
    historial = [];
    /**
     * Constructor lee la base de datos
     */
    constructor() {
        //leer Db si existe
    }

    /**
     * Busca una ciudad
     * @param {*} city 
     */
    async citySearch(city="") {
        //Buscamos las ciudad desde la api petición http
        console.log("lugar", city);
        return [];
    }

}
module.exports = Searches;