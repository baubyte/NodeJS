const axios = require('axios');
/**
 * Clase para las búsquedas
 */
class Searches{
    //Historia de búsquedas se va a limitar a 6  
    historial = [];
    //Propiedad con los parámetros para mapbox
    get paramsMapBox() {
        return {
            'access_token': 'pk.eyJ1IjoiYmF1Ynl0ZSIsImEiOiJja3lxNnVrNzIwaDQ3MndwYm5qZndqb2Q0In0.daKpE6uvwZ7n8DUwEuvrPA',
            'limit': 5,
            'language': 'es'
        }
    }
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
     async citySearch( city = '' ) {

        try {
            // Petición http
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json`,
                params: this.paramsMapBox
            });

            //Buscamos las ciudad desde la api petición get axios
            const response = await instance.get();
            //Armamos el return
            return response.data.features.map( lugar => ({
                id: lugar.id,
                nombre: lugar.place_name,
                lng: lugar.center[0],
                lat: lugar.center[1],
            }));
        } catch (error) {
            console.log(error);
            return [];
        }
    }

}
module.exports = Searches;