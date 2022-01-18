/* setTimeout(() => {
    console.log('Hola Mundo');
}, 1000); */


const getUsuarioById = (id, callback) => {
    const user = {
        id, //No va id porque es redundante
        nombre: 'BAUBYTE'
    }

    //simulamos la conexión con la base de datos

    setTimeout(() => { 
        callback(user);
    }, 1500)
};

getUsuarioById(10, ( usuario) => {
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
});