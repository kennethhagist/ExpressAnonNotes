const mongoose = require ('mongoose');
const fs = require ('fs');
const path = require ('path');
const reg = new RegExp('\\.js$','i');

mongoose.connect('mongodb://localhost/expressAnonNotes');
mongoose.connection.on('connected', () => console.log('connected to a DB'));
mongoose.Promise = global.Promise;

const modelsPath = path.resolve('server', 'models');

fs.readdirSync(modelsPath).forEach(file => {
    if (reg.test(file)) {
        require(path.join(modelsPath, file));
    }
});