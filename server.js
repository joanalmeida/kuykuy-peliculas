var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//app.use(express.static(path.join(__dirname + '/dist')));
//app.use(express.static(path.join(__dirname + '/public')));
app.use(express.static(__dirname + "/public"));
app.use('/dist', express.static(__dirname + "/dist"));

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('home');
});

app.listen(9000, function(){
    console.log("Server listening on port 9000");
});