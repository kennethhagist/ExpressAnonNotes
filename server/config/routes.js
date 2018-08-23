var notes = require('../controllers/notes.js');
const path = require('path');

module.exports = function(app) {
    app.get('/notes', function (req, res) {
        notes.retrieve(req, res);
    });

    app.post('/notes', (req, res) => {
        notes.create(req, res);
    });
    
    app.all("*", function(req, res) {
        console.log('hitting catch all route')
        // notes.show(req,res)
        res.sendFile(path.resolve("anonymousNotes/dist/index.html"))
    });
};