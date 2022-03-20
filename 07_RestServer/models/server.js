const express = require('express');
const cors = require('cors');
/**
 * Clase servidor express
 */
class Server {
    /**
     * Constructor
     */
    constructor() {
        this.app = express();
        this.usersRoutePath = '/api/users';
        //Puerto
        this.port = process.env.PORT || 8081;
        //Middleware
        this.middleware();
        //Rutas
        this.routes();
    }
    /**
     * Rutas
     */
    routes() {
        //Middleware de Rutas
        this.app.use(this.usersRoutePath,require('../routes/users'));
    }
    /**
     * Carga todos los middleware
     */
    middleware() {
        //cors
        this.app.use(cors());
        //Directorio publico
        this.app.use(express.static('public'));
        //Pareseo y lectura del body
        this.app.use(express.json());
    }
    /**
     * Puerto de escucha
     */
    listen() {
        this.app.listen(this.port, () => {
            console.log('Escuchando en el puerto', this.port)
        })
    }
}

module.exports = Server;