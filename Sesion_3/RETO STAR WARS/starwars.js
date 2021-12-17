const https = require ('https')

function SWAPI() {
    return new Promise((resolve, reject) => {
      https
        .get(`https://swapi.dev/api/people/`, (resp) => {
          let datos = "";
  
          resp.on("data", (chunk) => {
            datos += chunk;
          });
  
          resp.on("end", () => {
            datos = JSON.parse(datos)


            resolve(datos);
          });
        })
        .on("error", (err) => {
          reject(err.message);
        });
    });
}

(async()=>{
  await SWAPI().then((datos)=>{
    console.log('\nSORTED BY FILMS PARTICIPATION\n');
    datos.results.sort((a,b)=>a.films.length - b.films.length).forEach(element=>{
      console.log(`CHARACTER: ${element.name} - NUM: ${element.films.length}`)
    })
    console.log('\nSORTED BY NAME\n');
    datos.results.sort((a,b)=>(a.name<b.name)?1:-1).forEach(element=>{
      console.log(`CHARACTER: ${element.name}`)
    })
  }).catch((err)=>console.log(err));
})();