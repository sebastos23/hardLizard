let index = require('./src/index')
let router = function(url,res){
    switch (url) {
        case '/':
            index.homePage(res);
            console.log('Home page')// muestra en terminal la pagina en ejecucion
            break;
        case '/en-cartelera':
            index.enCartelera(res);
            console.log('cartelera');
            break;
        case '/mas-votadas':
            index.masVotadas(res);
            console.log('votadas');
            break;
        case '/sucursales':
            index.sucursales(res);
            console.log('sucursales');
            break;
        case '/contacto':
            index.contacto(res);
            console.log('contacto');
            break;
        case '/preguntas-frecuentes':
            index.preguntasFrecuentes(res);
            console.log('preguntas');
            break;
        default:
            res.end('404 pagina no encontrada');
    }

}
module.exports = router