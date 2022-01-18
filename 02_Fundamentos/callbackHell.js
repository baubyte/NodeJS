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
const id = 3;

const getEmpleadoById= (id, callback) => {
    const empleado = empleados.find((empleado) => empleado.id === id)?.nombre;
    if (empleado) {
        callback(null,empleado);
    }else{
        callback(`Empleado con ID ${id} no Existe`);
    }
}

const getSalarioById= (id, callback) => {

    const salario = salarios.find((salario) => salario.id === id)?.salario;
    if (salario) {
        callback(null,salario);
    }else{
        callback(`Salario con ID ${id} no Existe`);
    }
}


//console.log(getEmpleadoById(5));

/* getEmpleadoById(id, (error, empleado) => {
    if (error) {
        console.log("Error");
        return console.log(error);
    }
    console.log(empleado);
})

getSalarioById(id, (error, salario) => {
    if (error) {
        console.log("Error");
        return console.log(error);
    }
    console.log(salario);
}) */

getEmpleadoById(id, (error, empleado) => {
    if (error) {
        console.log("Error");
        return console.log(error);;
    }
    getSalarioById(id, (error, salario) => {
        if (error) {
            console.log("Error");
            return console.log(error);;
        }
        console.log('El Empleado:', empleado, 'tiene un Salario de:', salario);
    })
})