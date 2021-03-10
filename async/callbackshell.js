function saludo(nombre, micallback ){
    
    setTimeout(function()  {
        console.log('Hola,'+nombre);
        micallback(nombre);
    }, 1000); 
}
function despedida (nombre, otrocallback){
    setTimeout(function() {
        console.log('Adios,',nombre);
        otrocallback();
    }, 1000);
}
function hablar(calbackHablar){
    setTimeout(function() {
        console.log('Bla , bla, bla ....');
        calbackHablar();
    });
}
function conversacion(nombre, veces, callback){
    if (veces > 0 ) {
    hablar(function(){
        conversacion(nombre, --veces, callback);
    });
    } else {
        despedida(nombre);
    }

}
//funcion principal
console.log('Iniciando proceso');
saludo('Rocio',function(nombre){
    conversacion(nombre,3,function(nombre) {
        console.log('Terminamdo proceso');     
    });
});
