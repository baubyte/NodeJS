const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    edad: 50,
    getNombre(){
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}

/* const nombre = deadpool.nombre;
const apellido = deadpool.apellido;
const poder = deadpool.poder; */

//Desestructuracion
// const {nombre, apellido, poder, edad = 0} = deadpool;

function mostrarHeroe({nombre, apellido, poder, edad = 0}) {

    console.log(nombre, apellido, poder, edad);
}
// console.log(deadpool.getNombre());
// console.log(nombre, apellido, poder, edad);

//mostrarHeroe(deadpool)

const heroes = ['Deadpool', 'Iron Man', 'Hulk'];

/* const h1 = heroes[0];
const h2 = heroes[1];
const h3 = heroes[2]; */

const [h1, h2, h3] = heroes;
console.log(h1, h2, h3);