require('dotenv').config()
require('colors');

const {
    inquirerMenu,
    pause,
    readInput,
    listPlaces,
    confirm,
} = require('./helpers/inquirer');
const Searches = require('./models/searches');
//Función de inicio 
const main = async () => {
    //Capturar las opciones
    let option = '';
    //Se ejecuta siempre que no sea la opción 0
    do {
        //Mostrar el menu
        option = await inquirerMenu();
        //Instancia del modelo de busquedas
        const searches = new Searches();
        switch (option) {
            case 1:
                //Mostrar el input para buscar la ciudad
                const term = await readInput('Ingrese un Lugar a Buscar: ');
                //Obtenemos los resultados 
                const places = await searches.citySearch(term);
                //Pasamos los resultados obtenidos para armar los choises
                const id = await listPlaces(places);
                //Obtenemos el lugar seleccionado
                const placeSelected = places.find(place => place.id === id);
                //Si el id seleccionado es 0 hacemos que continue a la siguiente iteración
                if (id === '0') continue;
                //Guardamos en el historial
                searches.addHistory(placeSelected.name);
                //Buscar el clima del lugar seleccionado
                const weatherPlace = await searches.weatherPlace(placeSelected.latitude, placeSelected.latitude);
                //Mostramos la Información
                console.clear();
                console.log('\nInformación de la Ciudad\n'.green)
                console.log('Ciudad:', placeSelected.name.green);
                console.log('Latitud:', placeSelected.latitude);
                console.log('Longitud:', placeSelected.latitude);
                console.log('Estado del Clima:', weatherPlace.description.green);
                console.log('Temperatura:', weatherPlace.temp);
                console.log('Minima:', weatherPlace.temp_min);
                console.log('Maxima:', weatherPlace.temp_max);
                break;
            case 2:
                //Historial de Búsquedas
                searches.historyCapitalize.forEach((place, i) => {
                    const idx = `${i + 1}.`.green;
                    console.log(`${idx} ${place} `);
                })
                break;
        }
        if (option !== 0) await pause();
    } while (option !== 0);
}

//Arrancamos la app
main();