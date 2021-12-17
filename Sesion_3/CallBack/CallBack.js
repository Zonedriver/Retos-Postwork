/*function HW(){
    //TO DO
}

HW()

function suma(a,b){
    var c = a + b
    return c
}

suma(2,3)

function resta(a,b,callback) {
    var c = a-b
    return c
}

resta(4,5 function(g){
    console.log(g)
})*/

function primero() {
    console.log("soy el Primero")
}
function segundo() {
    console.log("soy el Segundo")
}
function tercero() {
    console.log("soy el Tercero")
}

primero()
segundo()
tercero()

function primerocb() {
    setTimeout(function() {
        console.log("soy el 1 CB")
    },5000) 
}

function segundocb() {
    setTimeout(function() {
        console.log("soy el 2 CB")
    },6000) 
}

function tercerocb() {
    setTimeout(function() {
        console.log("soy el 3 CB")
    },7000) 
}

primerocb()
segundocb()
tercerocb()
