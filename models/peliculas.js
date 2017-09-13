var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var movieSchema = new Schema({
    titulo: { type: String },
    anio:   { type: Number },
    genero: { type: String, enum:
        ['Drama', 'Accion', 'Terror', 'Aventura', 'Ciencia-Ficcion']}
});

module.exports = mongoose.model('Pelicula', movieSchema);