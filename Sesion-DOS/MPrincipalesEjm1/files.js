//fs
const path = require ('path')
const fs = require ('fs')

//C R U D
// Crearemos un archivo utilizando la funcion: fs.writeFile()

fs.writeFile(path.join(__dirname,'/ejemplo_1.txt'),'Este es el contenido de mi archivo',{encoding: 'utf-8'}, (err)=>{
    if(err) throw err;
    console.log('writeFile: ', 'Archivo creado!!')
})

//para leer el contenido de la funcion
fs.readFile(path.join(__dirname,'/ejemplo_1.txt'), {encoding: 'utf-8'}, function(error, data){
    if(error) return console.error(error)
    console.log('readFile: ',data)
})

//Actuliza la funcion añadiendo una nueva linea
fs.appendFile(path.join(__dirname,'/ejemplo_1.txt'),'\nEsto es una nueva linea',(err)=>{
    if(err) throw err;
    console.log('appendFile: ', 'Archivo actualizado!!')
})

/*_dirname: Obtiene el nombre completo del directorio donde se encuentra el archivo actualmente ejecutado
__filename: obtenga el nombre del archivo con la ruta absoluta completa del archivo actualmente ejecutado*/

