//Template Strings ES6

//ES5
const name1 = "Rize"
console.log("Welcome"+" "+name1)

//ES6
const name2 = "Rezi"
console.log(`Welcome ${name2}`)

const mensaje = `Welcome!
R1
R2
R3
R4
`;

console.log(mensaje)

//Expresiones matematicas
const a = 15
const b = 25

console.log(`a+b = ${a+b}`)

//Arrays

const colores = ['blue', 'red', 'yellow']

console.log(`Colores Primarios: ${colores.join(', ')}`)

//Funciones de alto orden
//Por lo que entiendo en este escenario se filtran los multiplos del numero indicado en la funcion
const numeros = [1,2,3,4,5,6,7,8,9,10];

console.log
(`Numeros Primos:
    ${
        numeros.filter(function(n)
        {
            return n % 2
        })
    }
`)

const book = 
{
    author: 'Matin Have',
    title: 'Eloquent JS',
    year: 2018
};

const copybook = {...book}
const copybook1 = {...book, year: 2019}
console.log(book)
console.log(copybook)
console.log(copybook1)

const colores1 = ['azul', 'rojo', 'amarillo']
const copiacolores = colores1
const copiacoloresspread = {...colores1}

console.log(colores1)
console.log(copiacolores)

colores1[0]='blanco'

console.log(colores1)
console.log(copiacolores)
console.log(copiacoloresspread)

const person = 
{
    firstName: 'John',
    lastName: 'Doe',
};
  
const copiapersonigual = person
const copiapersonspread = {...person}

  console.log(firstName, lastName); // John Doe