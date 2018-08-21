var notes = require('../controllers/notes.js');
const path = require('path');

module.exports = function(app) {
    app.get('/', function (req, res) {
        note.render(index);
    });

    app.post('/notes', function (req, res) {
        notes.create(req, res);
    });
    
    app.all("*"), function(req, res) {
        notes.show(req,res)
        // res.sendFile(path.resolve("./public/dist/index.html"))
    };
};