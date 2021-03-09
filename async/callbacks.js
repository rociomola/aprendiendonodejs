function saludo(nombre, micallback ){
    
    setTimeout(function()  {
        console.log('Hola,'+nombre);
        micallback();
    }, 1000);
}
function despedida (nombre, otrocallback){
    setTimeout(function() {
        console.log('Adios, ',nombre);
        otrocallback();
    }, 1000);
}
console.log('Iniciando proceso');
saludo('Rocio',function(){
    despedida('Rocio' ,function(){
       console.log('Terminamdo proceso');
    });
});
