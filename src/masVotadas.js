const fs = require('fs')
let masVotadas = {
         bd:'./data/movies.json',
         titulo:'Mas Votadas',
        leerJSON: function(){
            let  moviesJson =fs.readFileSync(this.bd, 'utf-8');
             let movies = JSON.parse(moviesJson);
             return movies
        },
        listarPelis:function(){
            let movies = this.leerJSON().movies;
            let masVotadas = movies.filter (function(movie) {
            return movie.vote_average >= 7;
        })
        return masVotadas
        },
        cantidad: function(){
        return this.listarPelis().length;           
        }
}
module.exports = masVotadas
/*listarTheaters:function(){
    let theaters =this.leerJSON();
    return theaters.theaters;*/