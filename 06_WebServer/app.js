const express = require('express')
const app = express()
const port = 3000

//Middleware Contenido Estáticos
app.use(express.static('public'));

app.get('/hello-word', (req, res) => {
    res.send('Hello World')
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
  