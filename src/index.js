let homePage = require('./homePage');
let enCartelera = require('./enCartelera');
let masVotadas = require('./masVotadas');
let contacto = require('./contacto');
let sucursales = require('./sucursales');
let preguntasFrecuentes = require('./preguntasFrecuentes');
let {hostname} =require('os');
const { promMasVot } = require('./masVotadas');
let index = {
    homePage:function(res){
        res.write(homePage.titulo)
        res.write('\n\n')
        res.write('Total de Peliculas: ' + homePage.cantidad())
        res.write('\n\n')
        let pelis = homePage.listarPelis();
        for(peli of pelis){
        res.write(peli)
        res.write('\n\n')
    }
    res.write('Recordá que podés visitar nuestras diferentes secciones:' + '\n\n');
        res.write('En Cartelera...' + '\n');
        res.write('Más Votadas...'+'\n');
        res.write('Sucursales...'+'\n');
        res.write('Contacto...'+'\n');
        res.write('Preguntas Frecuentes...'+'\n')
        res.end()
    },
    enCartelera:function(res){
        res.write(enCartelera.titulo)
        res.write('\n\n')
        res.write('Total de Peliculas: ' + enCartelera.cantidad())
        res.write('\n\n')
        let peliculas = enCartelera.listarPelis();
        for(pelicula of peliculas){
        res.write(pelicula.title)
        res.write('\n\n')
        res.write(pelicula.overview)
        res.write('\n\n')
    }
        res.end()
    },
    masVotadas:function(res){
        res.write(masVotadas.titulo + '\n\n');
        res.write('Total de peliculas: ' + masVotadas.cantidad()+'\n\n');
        res.write('Rating Promedio: '+ '\n\n')
        let movies = masVotadas.listarPelis();
        movies.forEach(function(movie) {
        res.write(movie.title + "\n"+"rating: " + movie.vote_average + '\n\n')
        res.write(movie.overview + '\n\n')
        })
        res.end()
    },
    contacto:function(res){
        res.write(contacto.titulo + '\n\n')
        res.write(contacto.contenido)
        res.end()
    },
    sucursales:function(res){
        res.write(sucursales.titulo + '\n\n');
        res.write('Total de Salas: ' + sucursales.cantidad() + '\n\n');
        res.write('Listado de Salas: ' + '\n\n');
        let theathers = sucursales.listarTheaters();
        theathers.forEach(function(theather) {
            res.write('nombre: ' + theather.name + '\n\n');
            res.write('direccion: ' + theather.address + '\n\n');
            res.write('descripcion: ' + theather.description + '\n\n')
        })
        res.end();
    },
    preguntasFrecuentes:function(res){
        res.write(preguntasFrecuentes.titulo + '\n\n');
        res.write('Total de preguntas: '+ preguntasFrecuentes.cantidad()+'\n\n')
        res.write('Listado de preguntas frecuentes\n\n')
        let faqs = preguntasFrecuentes.listarFaqs()
        for(faq of faqs){
            res.write('Pregunta: '+ faq.faq_title + '\n\n')
            res.write('Respuesta: '+ faq.faq_answer + '\n\n')
        }
        res.end()
    }

}
module.exports = index