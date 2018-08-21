var mongoose = require('mongoose')
var Note = mongoose.model('Note');

module.exports = {
    retrieve: function (req, res) {
        Note.find({}).sort('.createdAt').exec(function (err, notes) {
            if (err) {
                console.log(err);
            } else {
                res.render('notes', {notes: notes});
            }
        });
    },

    create: function (req, res) {
        var note = new Note(req.body.note);
        note.save(function (err) {
            if (err) {
                // res.json({ error: "failed to create note" });
                console.log('something went wrong');
            } else {
                Note.find({}).sort('-createdAt').exec(function (err, notes) {
                    console.log('successfully added a note!');
                    res.redirect('/notes');
                });
            }
        });
    },
};