var mongoose = require ('mongoose');
var path = require ('path');
var fs = require ('fs');
var modelsPath = path.join (__dirname, "./../models");

mongoose.connect('mongodb://localhost/expressAnonNotes');
mongoose.connection.on('connected', () => console.log('connected to a DB'));
// mongoose.Promise = global.Promise;

// const modelsPath = path.resolve('server', 'models');

fs.readdirSync(modelsPath).forEach(function(file) {
    if (file.indexOf('.js') >= 0) {
        require(modelsPath + '/' + file)
    }
});