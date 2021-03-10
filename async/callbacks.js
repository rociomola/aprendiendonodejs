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
console.log('Iniciando proceso');
saludo('Rocio',function(nombre){
    despedida(nombre ,function(){
       console.log('Terminamdo proceso');
    });
});
