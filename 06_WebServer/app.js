const hbs = require('hbs');
const express = require('express')
const app = express()
const port = 3000

//Estable el engine hbs para representar el html
app.set('view engine', 'hbs');
//Registrando los parciales
hbs.registerPartials(__dirname + '/views/partials');

//Middleware Contenido Estáticos
app.use(express.static('public'));

app.get('/', (req, res) => {
    //renderizamos la vista
    res.render('home',{
        name:'BAUBYTE',
        title:'Home'
    });
})
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
  