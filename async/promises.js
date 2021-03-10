function saludo(nombre){
    return new Promise(function(reslove, reject) {
        setTimeout(function()  {
            console.log('Hola,'+nombre);
            reslove(nombre);
        }, 1000); 
    })
}
function despedida (nombre){
    return new Promise((resolve, reject)=>{
        setTimeout(function() {
            console.log('Adios,',nombre);
            resolve();
        }, 1000);
    })
    
}
function hablar(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log(`${nombre}:Bla , bla, bla ....`);
            resolve(nombre);
        },1000);
    })
}

//ejecucion 
saludo('Rocio')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(despedida)
    .catch(error =>{
        console.log('Error');
        console.error(error)
    })