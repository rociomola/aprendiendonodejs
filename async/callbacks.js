function soyAsincrona(micallback ){
    
    setTimeout(function()  {
        console.log('Siendo una funcion asincrona');
        micallback();
    }, 1000);
}
console.log('Iniciando proceso');
soyAsincrona(function(){
    console.log('Terminamdo proceso');
});
