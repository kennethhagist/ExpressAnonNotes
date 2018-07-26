const Note = require('mongoose').model('Note');

module.exports = {
    index(req, res) {
        Note.find({})
            .then(notes => res.json(notes))
            .catch(console.log)
    },

    create(req, res) {
        console.log(req.body);
        Note.create(req.body)
            .then(note => res.json(note))
            .catch(console.log)
    }

};