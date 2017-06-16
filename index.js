var MongoClient = require('mongodb').MongoClient;
var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('static'));


app.post("/contact",function(req, res){

  res.send(200);
});

app.listen(9999, function () {
  console.log('Example app listening on port 9999!');
});
