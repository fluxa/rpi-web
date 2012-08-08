//Imports
var express = require('express');
var app = express.createServer(express.logger());
var fs = require('fs');

var response_template = "{\"success\":\"$SUCCESS\",\"error\":\"$ERROR\",\"data\":$DATA}";

// Configuration
app.configure(function(){
  //app.set('views', __dirname + '/views');
  //app.set('view engine', 'jade');
  //app.set('view options', { layout: false });
  app.use(express.bodyParser());
  //app.use(express.methodOverride());
  //app.use(express.cookieParser());
  //app.use(express.session({ secret: 'your secret here' }));
  //app.use(app.router);
  //app.use(express.static(__dirname + '/public'));
});


//Wiring

app.get('/', function(req, res) {
  //res.render('index', robj);
  res.send('I\m running from a raspberry-pi. Hello there!');
});

//Port
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
