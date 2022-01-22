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
            'access_token': process.env.MAPBOX_ACCESS_TOKEN,
            'limit': 10,
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
            return response.data.features.map( place => ({
                id: place.id,
                name: place.place_name,
                longitude: place.center[0],
                latitude: place.center[1],
            }));
        } catch (error) {
            console.log(error);
            return [];
        }
    }

}
module.exports = Searches;