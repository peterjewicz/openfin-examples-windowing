var   express = require('express')
    , http = require('http')
    , path = require('path');

var app = express();

app.set('title','OpenFin window transparency test');
app.use(express.static(path.join(__dirname, '')));

/* serves main page  */
app.get('/', function (req, res) {
    res.sendFile("src/index.html", {"root": __dirname});
});

/* process.env.PORT is used in case you want to push to Heroku, for example, here the port will be dynamically allocated */
var port = process.env.PORT || 8080;

http.createServer(app).listen(port, function(){
    console.log('Express server listening on port ' + port);
});
