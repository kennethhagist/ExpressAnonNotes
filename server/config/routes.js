const noteController = require('../controllers/notes');
const path = require('path');

module.exports = function(app) {
    app.get('/api/notes', noteController.index);

    app.post('/api/notes', noteController.create);

    app.all("*", function(req, res) {
        res.sendFile(path.resolve('dist', 'index.html'));
    });
}