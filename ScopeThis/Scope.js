//Scope Global
var nombre = "zaza";
var segundonombre = "fras";

function ccp()
{
    console.log(nombre)
    console.log(segundonombre)
}

function ccp2()
{console.log(nombre)}

ccp();
ccp2();

//Scope local

function ccp3()
{
    var iname = "ROTE";
    console.log(iname)
}

ccp3()
//console.log(iname)

//Scope en condicionales

if(true)
{
    var nom = "Ikarus"
    console.log(nom)
}

console.log(nom)

//Scope en bucles

var noc = [1,2,3,4,5]
var tis =[]

for(var i = 0; i<noc.length; i++)
{
    tis.push(noc[i]*2)
}

console.log(noc)
console.log(tis)