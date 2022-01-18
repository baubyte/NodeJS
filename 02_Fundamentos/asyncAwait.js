const empleados = [
    {
        id:1,
        nombre:'BAUBYTE'
    },
    {
        id:2,
        nombre:'BAUBYTE2'
    },
    {
        id:3,
        nombre:'BAUBYTE3'
    },
];

const salarios = [
    {
        id:1,
        salario: 3000
    },
    {
        id:2,
        nombre: 2000
    },
];

const getEmpleadoById = (id, callback) => {

    return new Promise((resolve, reject) => {
        const empleado = empleados.find((empleado) => empleado.id === id)?.nombre;
        (empleado)
            //si existe
            ? resolve(empleado)
            :
            //si no existe
            reject(`Empleado con ID ${id} no Existe`);
    });

}

const getSalarioById = (id, callback) => {

    return new Promise((resolve, reject) => {
        const salario = salarios.find((salario) => salario.id === id)?.salario;
        (salario)
            ? resolve(salario)//si existe
            :
            reject(`Salario con ID ${id} no Existe`);//si no existe
    });

}

const getInfoUsuario = async (id) => {
    try {
        const empleado = await getEmpleadoById(id);
        const salario = await getSalarioById(id);
        return `El Empleado:', ${empleado}, 'tiene un Salario de:', ${salario}`;
    } catch (error) {
        throw error;
    }
}

const id = 3;
getInfoUsuario(id)
.then(msg => console.log(msg))
.catch(error => console.log(error));