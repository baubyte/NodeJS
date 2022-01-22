const axios = require('axios');
const fs = require('fs');
/**
 * Clase para las búsquedas
 */
class Searches {
    //Directorio donde se va a guardar el archivo
    file = './dB/history.json';
    //Historia de búsquedas se va a limitar a 6  
    history = [];
    //Propiedad con los parámetros para mapbox
    get paramsMapBox() {
        return {
            'access_token': process.env.MAPBOX_ACCESS_TOKEN,
            'limit': 10,
            'language': 'es'
        }
    }
    //Propiedad con los parámetros para Weather
    get paramsWeather() {
        return {
            appid: process.env.OPEN_WEATHER_KEY,
            units: 'metric',
            lang: 'es'
        }
    }
    //Propiedad de nombres Capitalizado
    get historyCapitalize() {
        //Retornamos
        return this.history.map( place => {
            //Separamos las palabras
            let words = place.split(' ');
            //Convertimos en mayúsculas solo la primer letra
            words = words.map( word => word[0].toUpperCase() + word.substring(1) );
            //Retornamos la palabras
            return words.join(' ')
        })
    }
    /**
     * Constructor lee la base de datos
     */
    constructor() {
        //leer Db si existe
        this.readDb();
    }

    /**
     * Busca una ciudad
     * @param {*} city 
     */
    async citySearch(city = '') {

        try {
            //Configuración para la api
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json`,
                params: this.paramsMapBox
            });

            // Petición http
            //Buscamos las ciudad desde la api petición get axios
            const response = await instance.get();
            //Armamos el return
            return response.data.features.map(place => ({
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
    /**
     * Busca el clima por la latitud y longitud
     * @param {*} lat 
     * @param {*} lon 
     */
    async weatherPlace(lat, lon) {

        try {
            //Configuración para la api
            const instance = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather`,
                //Desestructuramos los parametros y agregamos la latitud y longitud
                params: { ...this.paramsWeather, lat, lon }
            })
            // Petición http
            //Buscamos el clima desde la api petición get axios
            const response = await instance.get();
            //Obtenemos solo el clima y los datos principales
            const { weather, main } = response.data;

            //Retornamos el array con la información
            return {
                description: `${weather[0].description}`.toUpperCase(),
                temp_min: `${main.temp_min}`,
                temp_max: `${main.temp_max}`,
                temp: `${main.temp}`
            }

        } catch (error) {
            console.log(error);
        }
    }
    /**
    * Pasa las al historial
    * @param {*} historyPlaces
    */
    addHistoryFromArray(historyPlaces = []) {
        //recorremos las history y la vamos agregando
        historyPlaces.history.forEach(historyPlace => this.history.unshift(historyPlace.toLocaleLowerCase()));
    }
    /**
     * Guarda el historial de búsqueda
     * @param {*} place 
     */
    addHistory(place = '') {
        //Buscamos en si el lugar ya esta en el historial
        if (this.history.includes(place.toLowerCase())) {
            //si existe no hacemos nada
            return;
        }
        //Solo Guardamos 10 lugares en el historial
        this.history = this.history.splice(0, 9);
        //Agregamos el historial al array
        this.history.unshift(place.toLocaleLowerCase());
        //Guardamos en el db
        this.saveDb()
    }
    /**
     * Guarda la información en un archivo json
     * @param {*} data 
     */
    saveDb (){
        const payload = {
            history: this.history
        }
        //Guardamos el archivo
        fs.writeFileSync(this.file, JSON.stringify(payload), 'utf8');
    }
    /**
     * Carga la db
     * @returns 
     */
    readDb(){
        //Verifica el archivo
        if (!fs.existsSync(this.file)) {
            return;
        }
        //Leemos el archivo
        const infoFile = fs.readFileSync(this.file, { encoding: 'utf8' });
        //Guardamos los datos y lo parseamos
        const data = JSON.parse(infoFile);
        //Seteamos
        this.history = data.history;
    }
}
module.exports = Searches;