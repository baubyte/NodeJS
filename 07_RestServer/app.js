require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT || 8081;

app.get('/', (req, res) => {
    //renderizamos la vista

});
app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`)
  })
  