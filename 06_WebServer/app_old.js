const http = require('http');

/**
 * Creamos el servidor
 */
http.createServer((req, res)=>{

    res.setHeader('Content-Disposition', 'attachment; filename=list.csv');
    res.writeHead(200,{'Content-Type': 'application/json'});
    //res.writeHead(200,{'Content-Type': 'application/csv'});
    /**
     * Ejemplo JSON
     */
    const persona = {
        id: 1,
        name:'BAUBYTE'
    }

    res.write(JSON.stringify(persona));
    res.end();
}).listen(8080);

console.log("Listen Port. 8000");