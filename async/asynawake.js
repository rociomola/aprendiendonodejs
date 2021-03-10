async function saludo(nombre){
    return new Promise(function(reslove, reject) {
        setTimeout(function()  {
            console.log('Hola,'+nombre);
            reslove(nombre);
        }, 1000); 
    })
}
async function despedida (nombre){
    return new Promise((resolve, reject)=>{
        setTimeout(function() {
            console.log('Adios,',nombre);
            resolve();
        }, 1000);
    })
    
}
async function hablar(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log(`${nombre}:Bla , bla, bla ....`);
            resolve(nombre);
        },1000);
    })
}

//ejecucion 
async function main(){
   let nombre = await saludo('rocio');
    await hablar();
    await hablar();
    await hablar();
    await despedida(nombre);
}
console.log('Empezamos el proceso');
main();
console.log('terminamod el proceso');