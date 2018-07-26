var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require("body-parser");

app.use(express.static(__dirname + '/anonymousNotes/dist'));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

require('./server/config/database');
require('./server/config/routes')(app);

app.listen(1337, function() {
    console.log("listening on port 1337");
})