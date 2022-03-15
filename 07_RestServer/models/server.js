const express = require('express')
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
        this.app.get('/api', (req, res) => {
            res.status(200).json({
                msg: 'GET API'
            })
        });
        this.app.put('/api', (req, res) => {
            res.status(200).json({
                msg: 'PUT API'
            })
        });
        this.app.post('/api', (req, res) => {
            res.status(201).json({
                msg: 'POST API'
            })
        });
        this.app.delete('/api', (req, res) => {
            res.status(200).json({
                msg: 'DELETE API'
            })
        });
    }
    /**
     * Carga todos los middleware
     */
    middleware() {
        //Directorio publico
        this.app.use(express.static('public'));
    }
    /**
     * Puerto de escucha
     */
    listen() {
        this.app.listen(this.port, () => {
            console.log('Escuchando en el puerto',this.port)
        })
    }
}

module.exports = Server;