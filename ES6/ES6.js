//var // tiene un scope global y local pero no en todos los casos
//let // tiene un scope global y local en todos los casos
//conts // scope global pero es inmutable

//Template Strings
const msg = `Hello World!`
console.log(msg);


const colors = ['blue','red','yellow'];
const copycolors = [...colors]

console.log(copycolors);

const book = 
{
    author: 'Matin Have',
    title: 'Eloquent JS',
    year: 2018
};

const copybook = {...book}
console.log(copybook)
