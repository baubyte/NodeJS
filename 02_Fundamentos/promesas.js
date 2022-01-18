const empleados = [
    {
        id: 1,
        nombre: 'BAUBYTE'
    },
    {
        id: 2,
        nombre: 'BAUBYTE2'
    },
    {
        id: 3,
        nombre: 'BAUBYTE3'
    },
];

const salarios = [
    {
        id: 1,
        salario: 3000
    },
    {
        id: 2,
        nombre: 2000
    },
];

const id = 1;

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

/* getEmpleadoById(id)
    .then(empleado => console.log(empleado))
    .catch(error => console.error(error)); */

/* getSalarioById(id)
    .then(salario => console.log(salario))
    .catch(error => console.error(error)); */

/* getEmpleadoById(id)
    .then(empleado => {
        getSalarioById(id)
            .then(salario => {
                console.log('El Empleado:', empleado, 'tiene un Salario de:', salario)
            })
            .catch(error => console.error(error));
    })
    .catch(error => console.error(error)); */

let nombre;
getEmpleadoById(id)
    .then(empleado => {
        nombre = empleado;
        return getSalarioById(id)
    })
    .then(salario => console.log('El Empleado:', nombre, 'tiene un Salario de:', salario))
    .catch(error => console.error(error)); 