var express = require('express');
var exphbs  = require('express-handlebars');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://essec:cergyisc00l@138.68.110.210:27017/admin?readPreference=primary';
var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('static'));

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


MongoClient.connect(url, function(err, db) {

  var collection = db.collection('contactrock');

  app.post("/contact",function(req, res){
    collection.insert(req.body,function(err,result){
            res.send(200);

        });
  });
});

app.listen(9999, function () {
  console.log('Example app listening on port 9999!');
});
