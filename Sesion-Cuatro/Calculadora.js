// caculadora tipoOperacion === suma resta multi division
const tipooperacion = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

switch (tipooperacion){
    case 'suma':
        console.log(`${num1}+${num2} = ${num1+num2}`)
        break;
    case 'resta':
        console.log(`${num1}-${num2} = ${num1-num2}`)
        break;
    case 'multi':
        console.log(`${num1}*${num2} = ${num1*num2}`)
        break;
    case 'division':
         console.log(`${num1}/${num2} = ${num1/num2}`)
        break;        
    default:
        break;
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout  
})

readline.question('Quien eres?', name =>{
    console.log(`Hola ${name}`)
    readline.close()
})


//readline mas calculadora
