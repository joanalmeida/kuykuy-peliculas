var mongoose = require('mongoose');
var Movie = mongoose.model('Pelicula');

exports.addMovie = function(req, res) {
    console.log("POST");
    console.log(req.body);

    var movie = new Movie({
        titulo: req.body.titulo,
        anio: req.body.anio,
        genero: req.body.genero
    });

    movie.save(function(err, movie){
        if(err) return res.status(500).send(err.message);
        //res.send(200).jsonp(movie);
        res.json(movie);
    });
};