var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    mongoose = require('mongoose');
var app = express();

// Connection to DB
mongoose.connect('mongodb://localhost/peliculas', function(err, res){
    if(err) throw err;
    console.log('Connected to Database');
});

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/public"));
app.use('/dist', express.static(__dirname + "/dist"));

//Modelos y Controllers
var models = require('./models/peliculas');
var PeliculasCtrl = require('./controllers/peliculas');

//API Routes
var pelisApi = express.Router();

pelisApi.route('/peliculas')
    .post(PeliculasCtrl.addMovie);

//app.use(express.static(path.join(__dirname + '/dist')));
//app.use(express.static(path.join(__dirname + '/public')));

app.use('/api', pelisApi);

app.get('/', function(req, res){
    res.render('home');
});

app.listen(9000, function(){
    console.log("Server listening on port 9000");
});
