const express = require('express')
const app = express()
const port = 3000

//Middleware Contenido Estáticos
app.use(express.static('public'));

app.get('/generic', (req, res) => {
    res.sendFile(__dirname+'/public/generic.html');
})
app.get('/elements', (req, res) => {
    res.sendFile(__dirname+'/public/elements.html');
})
/**
 * Cualquier otra ruta
 */
app.get('*', (req, res) => {
    res.sendFile(__dirname+'/public/404.html');
});

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`)
  })
  