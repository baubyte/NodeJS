const mongoose = require('mongoose');


const dbConnection = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_CNN,{
            useNewUrlParser:true,
            useUnifiedTopology: true
        });
        console.log('Conectado a Base de Datos');
    } catch (error) {
        console.log(error);
        throw new Error('Error con la Base de Datos');
    }
}

module.exports ={
    dbConnection
}