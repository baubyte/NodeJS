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
        this.app.use('/api/users',require('../routes/user'));
    }
    /**
     * Carga todos los middleware
     */
    middleware() {
        //cors
        this.app.use(cors());
        //Directorio publico
        this.app.use(express.static('public'));
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